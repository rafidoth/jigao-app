"use client";
import type { CoreMessage } from "ai";
import React, { createContext, useState, useContext } from "react";


interface Props {
  children: React.ReactNode
}



export interface ChatHistoryContextType {
  messages: CoreMessage[];
  setMessages: (messages: CoreMessage[]) => void;
}

const ChatHistoryContext = createContext<ChatHistoryContextType>({
  messages: [],
  setMessages: () => { },
});

export const ChatHistoryProvider = ({ children }: Props) => {
  const [messages, setMessages] = useState<string[]>([]);
  return (
    <ChatHistoryContext.Provider value={{ messages, setMessages }}>
      {children}
    </ChatHistoryContext.Provider>
  );
};

export const useChatHistory = () => useContext(ChatHistoryContext);


