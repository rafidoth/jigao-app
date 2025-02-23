"use client";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { EyeNoneIcon } from "@radix-ui/react-icons";
import { FaTrashAlt } from "react-icons/fa";

import { MCQType, QuizType } from "@/app/utils/types";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface QuizProps {
  quiz: MCQType;
  index: number;
  removeSingleQuiz: () => void;
}

export default function Quiz({ quiz, index, removeSingleQuiz }: QuizProps) {
  const [selected, setSelected] = useState<string | undefined>(undefined);
  const [showAnswer, setShowAnswer] = useState<boolean>(true);
  return (
    <Card className={cn("bg-transparent w-[400px]")}>
      <CardHeader className="font-semibold">
        {index + 1}. {quiz.question}
      </CardHeader>
      <CardContent>
        <RadioGroup value={selected} onValueChange={(val) => setSelected(val)}>
          {quiz.choices.map((choice, i) => (
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
                {quiz.choices[quiz.answer]}
              </span>
              <span
                className={`cursor-pointer `}
                onClick={() => setShowAnswer(true)}
              >
                <EyeNoneIcon className={`w-4 h-4 hover:text-rose-500 `} />
              </span>
            </div>
            {quiz.answerExplanation}
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
