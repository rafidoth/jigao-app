import { createClient, PostgrestError } from "@supabase/supabase-js";
import type { Database } from "@/app/utils/supabase";
import {
  UserType,
  AnswerInsertType,
  QuizsetInsertType,
  QuestionInsertType,
  QuizType,
  QuestionTypeType,
  QuizsetType,
  QuestionType,
  MCQType,
  ChoiceInsertType,
  ContextInsertType,
} from "@/app/utils/types";

async function db_init() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      "Supabase URL or Supabase Anon Key not found in environment variables"
    );
  }
  return createClient<Database>(supabaseUrl, supabaseAnonKey);
}

export async function createUser(user: UserType) {
  const db = await db_init();

  const { error } = await db.from("users").insert({
    userid: user.userId,
    email: user.email,
    role: user.role,
    imageUrl: user.imageUrl,
    createdat: user.createdAt,
    firstName: user.firstName,
    lastName: user.lastName,
  });
  console.log("user insertion error", error);
}

export async function insertAnswer(answer: AnswerInsertType) {
  const db = await db_init();
  const { data, error } = await db.from("answers").insert(answer).select();
  if (error) {
    console.error(answer);
    console.error("answer insertion error", error);
    throw new Error(
      "Error inserting answer : returned error from insert command"
    );
  }
  console.log("answer insertion data", data);
  return data[0];
}

export async function insertQuizset(quizset: QuizsetInsertType) {
  const db = await db_init();
  const { data, error } = await db.from("quizsets").insert(quizset).select();
  if (error) {
    console.error("quizset insertion error", error);
    throw new Error(
      "Error inserting quizset : returned error from insert command"
    );
  }
  return data[0];
}

export async function insertQuestion(question: QuestionInsertType) {
  const db = await db_init();
  const { data, error } = await db.from("questions").insert(question).select();

  if (error) {
    console.error(question);
    console.error("question insertion error", error);
    throw new Error(
      "Error inserting question: returned error from insert command"
    );
  }
  console.log("question insertion data", data);
  return data[0];
}

export async function insertChoice(choice: ChoiceInsertType) {
  const db = await db_init();
  const { data, error } = await db.from("choices").insert(choice).select();
  if (error) {
    console.error(choice);
    console.error("choice insertion error", error);
    throw new Error(
      "Error inserting choice: returned error from insert command"
    );
  }
  console.log("choice insertion data", data);
  return data[0];
}

export async function insertContext(context: ContextInsertType) {
  const db = await db_init();
  const { data, error } = await db.from("contexts").insert(context).select();
  if (error) {
    console.error(context);
    console.error("context insertion error", error);
    throw new Error(
      "Error inserting context: returned error from insert command"
    );
  }
  console.log("context insertion data", data);
  return data[0];
}

export async function saveQuizzesToDB(
  quiz: QuizType[],
  questionType: QuestionTypeType,
  context: string,
  userId: string
) {
  const quizset: QuizsetInsertType = {
    title: context.slice(0, 30),
    userId: userId,
    visibility: "private",
  };

  const set: QuizsetType = await insertQuizset(quizset);
  if (!set) {
    throw new Error(
      "Error inserting quizset : returned data from insert command is NULL"
    );
  }
  const setID: string = set.id;

  if (context.length > 0) {
    const ctx: ContextInsertType = {
      content: context,
      quizsetID: setID,
    };
    await insertContext(ctx);
  }
  quiz.forEach(async (q) => {
    const question: QuestionInsertType = {
      question: q.question,
      quizsetID: setID,
      difficulty: q.difficulty,
      type: questionType,
    };
    const retQues: QuestionType = await insertQuestion(question);
    if (!retQues) {
      throw new Error(
        "Error inserting question : returned data from insert command is NULL"
      );
    }
    const qID: string = retQues.id;
    const qType: QuestionTypeType = retQues.type;

    if (qType === "mcq") {
      const qCopy = q as MCQType;
      const ans: AnswerInsertType = {
        answer: qCopy.choices[qCopy.answer],
        answer_explanation: qCopy.answerExplanation,
        questionID: qID,
      };
      await insertAnswer(ans);

      qCopy.choices.forEach(async (c, i) => {
        const choice: ChoiceInsertType = {
          choiceText: c,
          choiceNumber: i,
          questionID: qID,
        };
        await insertChoice(choice);
      });
    } else {
      const ans: AnswerInsertType = {
        answer: q.answer.toString(),
        answer_explanation: q.answerExplanation,
        questionID: qID,
      };
      await insertAnswer(ans);
    }
  });

  console.log("Quizset saved to DB");
}

export async function fetchQuizSetsOfUserFromDB(userId: string) {
  const db = await db_init();
  const { data, error } = await db
    .from("quizsets")
    .select()
    .eq("userId", userId);

  if (error) {
    console.error("quizset fetch error", error);
    throw new Error(
      "Error fetching quizset : returned error from select command"
    );
  }
  console.log("quizset fetch data", data);
  return data;
}
