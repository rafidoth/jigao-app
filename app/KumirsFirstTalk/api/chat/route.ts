import { ai } from "@/app/KumirsFirstTalk/api/Ai";

export async function GET() {
  const reply: string = await ai.generate_text()
  return Response.json({ message: reply });
}





