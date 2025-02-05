import React from 'react';
import { Kumir } from './KumirIcon';
import type { CoreMessage } from 'ai';
import ReactMarkdown from "react-markdown";
import { useStream } from '@/app/ui/StreamContext';
interface Props {
  message: CoreMessage
  isUser: boolean;
}
export default function ChatBubble({ message, isUser }: Props) {
  const common_styles = "flex p-2 m-2"
  const { loading } = useStream()
  return <div
    className={`${common_styles} ${isUser ? "justify-end" : "justify-start"}`}
  >
    {!isUser && <Kumir className="w-6 h-6 mx-2" />}
    <span className={`max-w-[600px] ${isUser && "bg-stone-800 p-2 rounded-sm"}`}>
      {!loading &&
        <ReactMarkdown>
          {message.content as string}
        </ReactMarkdown>
      }
      {
        loading && message.content as string
      }
    </span>
  </div>
}



