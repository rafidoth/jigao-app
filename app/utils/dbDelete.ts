import { db_init } from "./db";

export async function removeQuestion(question_uuid: string) {
  const db = await db_init();
  let { data, error } = await db.rpc("deleteSingleMCQ", {
    question_uuid,
  });
  if (error) console.error(error);
  else console.log(data);
}
