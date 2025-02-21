"use client";
import ResizablePanelGen from "../../../../components/ResizablePanelGen";
import { useState } from "react";
import { QuestionTypeType, QuizType } from "../../../../utils/types";
import { dummyQuizzes } from "../../../../utils/dummy";
import { saveQuizzesToDB } from "../../../../utils/db";
import { useUser } from "@clerk/nextjs";
import React from "react";
import { useParams } from "next/navigation";

type Props = {
  // params: Promise<{ quizsetID: string }>;
};

function TextPromptPage({}: Props) {
  const [content, setContent] = useState<string>("");
  const [fetchedQuizes, setFetchedQuizes] = useState<QuizType[]>([]);
  const [generating, setGenerating] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(0);
  const [questionType, setQuestionType] = useState<QuestionTypeType>("mcq");

  const { isLoaded, user } = useUser();
  const { quizsetID } = useParams();

  const handleGenerate = async () => {
    if (content.length === 0) {
      console.log("No content");
      return;
    }
    if (quantity === 0) {
      console.log("No quiz count");
      return;
    }
    console.log("Generating quiz");
    const data = {
      knowledge: content,
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
        await saveQuizzesToDB(object, questionType, content, user.id);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setGenerating(false);
    }
  };

  return (
    <ResizablePanelGen
      gen={generating}
      fetchedQuizSet={fetchedQuizes}
      content={content}
      setContent={setContent}
      quantity={quantity}
      setQuantity={setQuantity}
      questionType={questionType}
      setQuestionType={setQuestionType}
      generate={handleGenerate}
    />
  );
}

export default TextPromptPage;
