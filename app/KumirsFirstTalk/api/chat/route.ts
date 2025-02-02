import { ai } from "@/app/KumirsFirstTalk/api/Ai";
import { CoreMessage } from "ai";

export async function POST(req: Request) {
  const messages: CoreMessage[] = [
    {
      role: 'system',
      content: 'You are a relationship counselor.'
    }
  ]
  const { newMessage }: { newMessage: CoreMessage } = await req.json()
  console.log("newmessage", newMessage)
  messages.push(newMessage)
  const result = ai.generate_text(messages)
  return result
}





