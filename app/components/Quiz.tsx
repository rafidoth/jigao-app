"use client";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { EyeNoneIcon } from "@radix-ui/react-icons";
import { FaTrashAlt } from "react-icons/fa";

import { MCQ_Type, MCQType, QuizType } from "@/app/utils/types";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { getChoices, getCorrectAnswer } from "../utils/processData";

interface QuizProps {
  quiz: MCQ_Type;
  index: number;
  removeSingleQuiz: () => void;
}

export default function Quiz({ quiz, index, removeSingleQuiz }: QuizProps) {
  const [selected, setSelected] = useState<string | undefined>(undefined);
  const [showAnswer, setShowAnswer] = useState<boolean>(true);

  return (
    <Card className={cn("bg-transparent w-[400px]")}>
      <CardHeader className="font-semibold">
        {index + 1}. {quiz.question.question}
      </CardHeader>
      <CardContent>
        <RadioGroup value={selected} onValueChange={(val) => setSelected(val)}>
          {getChoices(quiz.choices).map((choice, i) => (
            <div key={i + 1} className="flex items-center space-x-2">
              <RadioGroupItem value={choice} id={choice} />
              <Label htmlFor={choice}>{choice}</Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-2">
        {showAnswer && (
          <span
            className={`cursor-pointer bg-rose-900/80 hover:bg-rose-900/50
            rounded px-1
            `}
            onClick={() => setShowAnswer(false)}
          >
            Show Answer
          </span>
        )}
        {!showAnswer && (
          <div className={"flex flex-col"}>
            <div className={`flex justify-between`}>
              <span
                className={`cursor-pointer bg-green-900/80
            hover:bg-green-900/50 rounded px-1
            `}
                onClick={() => setShowAnswer(true)}
              >
                {getCorrectAnswer(quiz.answer.answer, quiz.choices)}
              </span>
              <span
                className={`cursor-pointer `}
                onClick={() => setShowAnswer(true)}
              >
                <EyeNoneIcon className={`w-4 h-4 hover:text-rose-500 `} />
              </span>
            </div>
            {quiz.answer.answer_explanation}
          </div>
        )}
        <div className="w-full flex justify-end">
          <button onClick={() => removeSingleQuiz()}>
            <FaTrashAlt className="cursor-pointer hover:text-red-500 transition-colors" />
          </button>
        </div>
      </CardFooter>
    </Card>
  );
}
