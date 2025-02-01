import React from 'react';
import { SketchLogoIcon, PersonIcon } from "@radix-ui/react-icons"

interface Props {
  text: string;
  isUser: boolean;
}

export default function ChatBubble({ text, isUser }: Props) {
  const common_styles = "flex p-2 m-2"
  return <div
    className={`${common_styles} ${isUser ? "justify-end" : "justify-start"}`}
  >
    {!isUser && <SketchLogoIcon className="w-6 h-6 mx-2" />}
    <span className={`max-w-[600px] ${isUser && "bg-stone-800 p-2 rounded-sm"}`}>
      {text}
    </span>
  </div>
}
