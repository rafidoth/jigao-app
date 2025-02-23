"use client";
import ResizablePanelGen from "../../../../components/ResizablePanelGen";
import { useEffect, useState } from "react";
import {
  MCQ_Type,
  QuestionTypeType,
  QuizSet_Type,
  QuizsetPageType,
  QuizsetType,
  QuizType,
} from "../../../../utils/types";
import { dummyQuizzes } from "../../../../utils/dummy";
import {
  fetchQuizsetWithIDFromDB,
  saveQuizzesToDB,
} from "../../../../utils/db";
import { useUser } from "@clerk/nextjs";
import React from "react";
import { useParams } from "next/navigation";
import { useCurrentQuizsetCtx } from "@/app/contexts/CurrentQuizset.context";
import { useQuizSetCtx } from "@/app/contexts/Quizset.context";
import { get_MCQ_quizset } from "@/app/utils/dbRead";

type Props = {
  // params: Promise<{ quizsetID: string }>;
};

function TextPromptPage({}: Props) {
  const [context, setContext] = useState<string>("");
  const [fetchedQuizes, setFetchedQuizes] = useState<MCQ_Type[]>([]);
  const [generating, setGenerating] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(0);
  const [questionType, setQuestionType] = useState<QuestionTypeType>("mcq");

  const { isLoaded, user } = useUser();
  const { currentQuizset, setCurrentQuizset } = useCurrentQuizsetCtx();
  const { Quizsets, setQuizsets } = useQuizSetCtx();
  const { quizsetID } = useParams() as { quizsetID: string };

  const handleGenerate = async () => {
    if (context.length === 0) {
      console.log("No content");
      return;
    }
    if (quantity === 0) {
      console.log("No quiz count");
      return;
    }
    console.log("Generating quiz");
    const data = {
      knowledge: context,
      instructions: "",
      quantity: quantity,
      questionType: questionType,
    };
    setGenerating(true);
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const { object } = await response.json();
      setFetchedQuizes(object);
      if (isLoaded && user) {
        const set: QuizsetType = await saveQuizzesToDB(
          object,
          questionType,
          context,
          user.id
        );
        setQuizsets([...Quizsets, set]);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setGenerating(false);
    }
  };
  const handleRemoveSingleQuiz = (index: number) => {
    const newQuizes = fetchedQuizes.filter((_, i) => i !== index);
    setFetchedQuizes(newQuizes);
  };
  useEffect(() => {
    if (quizsetID && quizsetID !== "new") {
      const fn = async () => {
        setGenerating(true);
        const current_quizset: QuizSet_Type = await get_MCQ_quizset(quizsetID);
        if (current_quizset) {
          setCurrentQuizset(current_quizset);
          setContext(current_quizset.context.content);
          setFetchedQuizes(current_quizset.questions);
        }
        return setGenerating(false);
      };
      fn();
    }
  }, []);
  return (
    <ResizablePanelGen
      gen={generating}
      content={context}
      setContent={setContext}
      quantity={quantity}
      setQuantity={setQuantity}
      questionType={questionType}
      setQuestionType={setQuestionType}
      generate={handleGenerate}
      removeSingleQuiz={handleRemoveSingleQuiz}
    />
  );
}

export default TextPromptPage;
