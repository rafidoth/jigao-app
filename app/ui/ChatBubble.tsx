import React from 'react';
import Image from 'next/image'
import { SketchLogoIcon, PersonIcon } from "@radix-ui/react-icons"
import type { CoreMessage } from 'ai';

interface Props {
  message: CoreMessage
  isUser: boolean;
}
export default function ChatBubble({ message, isUser }: Props) {
  const common_styles = "flex p-2 m-2"
  return <div
    className={`${common_styles} ${isUser ? "justify-end" : "justify-start"}`}
  >
    {!isUser && <Kumir className="w-6 h-6 mx-2" />}
    <span className={`max-w-[600px] ${isUser && "bg-stone-800 p-2 rounded-sm"}`}>
      {message.content as string}
    </span>
  </div>
}



function Kumir({ className }: { className: string }) {
  return <div
    className={className}
  >
    <Image
      src="/kumir.png"
      width={500}
      height={500}
      alt="Kumir"
    />
  </div>
}
