import { ContextType, MCQ_Type, QuizSet_Type, QuizsetType } from "./types";
import {
  fetchAnswerOfQuestionFromDB,
  fetchChoicesOfQuestionFromDB,
  fetchContextOfQuizsetFromDB,
  fetchQuestionsOfQuizsetFromDB,
  fetchQuizsetWithIDFromDB,
} from "./db";
import { AnswerType, QuestionType } from "./types";

export async function get_MCQ_quizset(
  quizsetID: string
): Promise<QuizSet_Type> {
  const qs: QuizsetType = await fetchQuizsetWithIDFromDB(quizsetID);
  if (qs) {
    const questions: QuestionType[] = await fetchQuestionsOfQuizsetFromDB(
      quizsetID
    );
    const context: ContextType = await fetchContextOfQuizsetFromDB(quizsetID);
    const assembledQuizzes: Promise<MCQ_Type>[] = questions.map(async (q) => {
      const answer: AnswerType = (await fetchAnswerOfQuestionFromDB(q.id))[0];
      const choices = await fetchChoicesOfQuestionFromDB(q.id);
      if (choices.length !== 4) {
        throw new Error(
          "Error in fetching mcq choices: MCQ question must have 4 choices"
        );
      }
      const quiz: MCQ_Type = {
        question: q,
        answer: answer,
        choices: choices,
      };

      return quiz;
    });

    const resolvedQuizzes = await Promise.all(assembledQuizzes);

    return {
      quizset: qs,
      questions: resolvedQuizzes,
      context: context,
    };
  } else {
    throw new Error("Error fetching quizset");
  }
}
