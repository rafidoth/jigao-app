"use client"
import { useState, useRef } from "react"
import { cn } from "@/lib/utils"

interface LargeTextInputFieldProps {
  text: string
  setText: (text: string) => void
}

export default function LargeTextInputField(
  { text, setText }: LargeTextInputFieldProps
) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  return <>
    <textarea
      ref={textAreaRef}
      onChange={(e) => setText(e.target.value)}
      placeholder="Start typing here..."
      value={text}
      className={cn(
        "w-full h-full bg-transparent text-xl outline-none border-none",
        "appearance-none resize-none placeholder-gray-400/50",
        "overflow-scroll"
      )}
    >
    </textarea>
  </>
}
