import React from 'react';
import ChatBubble from './ChatBubble';
import { useChatHistory } from '@/app/ui/ChatHistoryContext';
import { useStream } from '@/app/ui/StreamContext';



export default function ChatMessages() {
  const { messages } = useChatHistory()
  const { reply, loading } = useStream()
  React.useEffect(() => {
    if (reply) {
      console.log("reply fetched", reply)
    }
  }, [reply])
  return (
    <div className="flex flex-col flex-grow w-full py-2 h-[500px] overflow-scroll">
      {messages?.map((chat, index) => (
        <ChatBubble key={index} message={chat} isUser={chat.role === "user"} />
      ))}
      {loading && <ChatBubble message={{ role: "assistant", content: reply }} isUser={false} />}
    </div>
  );
}
