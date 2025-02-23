"use client";
import { useState } from "react";
import { MCQType, QuestionTypeType, QuizType } from "@/app/utils/types";
import Quiz from "@/app/components/Quiz";
import { cn } from "@/lib/utils";
import { CiBoxList, CiGrid41 } from "react-icons/ci";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import GenearatedQuizViewLoading from "./GeneratedQuizViewLoading";

interface GeneratedQuizViewProps {
  generating: boolean;
  fetchedQuizes: QuizType[];
  quantity: number;
  setQuantity: (quantity: number) => void;
  questionType: QuestionTypeType;
  setQuestionType: (questionType: QuestionTypeType) => void;
  generate: () => void;
  removeSingleQuiz: (index: number) => void;
}

export default function GeneratedQuizView({
  generating,
  fetchedQuizes,
  quantity,
  setQuantity,
  questionType,
  setQuestionType,
  generate,
  removeSingleQuiz,
}: GeneratedQuizViewProps) {
  const [grid, setGrid] = useState<boolean>(true);
  console.log("fetchedQuizes", fetchedQuizes);
  return (
    <div className={`w-full max-h-full overflow-hidden  p-2 flex flex-col`}>
      <div className={cn("flex justify-between h-[40px] my-4 pr-4")}>
        <div className="border rounded-sm h-full flex items-center justify-center px-2">
          {fetchedQuizes.length} Questions Generated
        </div>
        <div
          onClick={() => generate()}
          className="h-full w-[200px] bg-accent cursor-pointer flex justify-center items-center border rounded-sm px-4 hover:bg-jigao/20 hover:border-jigao"
        >
          ⚡ {fetchedQuizes.length === 0 ? "Generate" : "Generate More"}
        </div>
        <div className=" h-full cursor-pointer flex justify-center items-center border rounded-sm px-2 hover:bg-accent">
          <Select onValueChange={(e) => setQuantity(parseInt(e))}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="No. of Questions" />
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: 30 }, (_, i) => i + 1).map((i) => {
                return (
                  <SelectItem key={i} value={i.toString()}>
                    {i} Questions
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>
        <div className=" h-full cursor-pointer flex justify-center items-center border rounded-sm px-2 hover:bg-accent">
          <Select
            onValueChange={(val) => setQuestionType(val as QuestionTypeType)}
          >
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              {[
                "MCQ (Multiple Choice Questions) ",
                "true/false",
                "Fill In the Blank",
                "Short Question",
              ].map((type, i) => {
                const values: QuestionTypeType[] = [
                  "mcq",
                  "truefalse",
                  "fillintheblanks",
                  "short",
                ];
                return (
                  <SelectItem key={type} value={values[i]}>
                    {type}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>
        <div className=" h-full cursor-pointer flex justify-center items-center border rounded-sm px-2 hover:bg-accent">
          {grid ? (
            <CiBoxList
              className="w-[32px] h-[32px]"
              onClick={() => setGrid(false)}
            />
          ) : (
            <CiGrid41
              className="w-[32px] h-[32px]"
              onClick={() => setGrid(true)}
            />
          )}
        </div>
      </div>
      {!generating && fetchedQuizes.length > 0 && (
        <div
          className={cn(
            "h-[800px] flex overflow-auto scrollbar ",
            grid && "flex-wrap",
            !grid && "flex-col",
            "scrollbar-thumb-zinc-800",
            "gap-4 items-center"
          )}
        >
          {fetchedQuizes.map((quiz, index) => (
            <Quiz
              key={index}
              index={index}
              quiz={quiz as MCQType}
              removeSingleQuiz={() => removeSingleQuiz(index)}
            />
          ))}
        </div>
      )}

      {generating && <GenearatedQuizViewLoading />}
    </div>
  );
}
