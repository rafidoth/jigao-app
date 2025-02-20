import { createClient, PostgrestError } from "@supabase/supabase-js";
import type { Database } from "@/app/utils/supabase";
import {
  UserType,
  AnswerInsertType,
  QuizsetInsertType,
  QuestionInsertType,
  QuizType,
} from "@/app/utils/types";

async function db_init() {
  return createClient<Database>(
    process.env.SUPABASE_URL || "",
    process.env.SUPABASE_ANON_KEY || ""
  );
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
  const { error } = await db.from("answers").insert(answer);
  console.log("answer insertion error", error);
}

export async function insertQuizset(quizset: QuizsetInsertType) {
  const db = await db_init();
  const { error } = await db.from("quizsets").insert(quizset);
  console.log("quizset insertion error", error);
}

export async function insertQuestion(question: QuestionInsertType) {
  const db = await db_init();
  const { error } = await db.from("questions").insert(question);
  console.log("question insertion error", error);
}

export async function saveQuiz(quiz: QuizType) {}
