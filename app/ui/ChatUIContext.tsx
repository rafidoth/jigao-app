"use client";
import React, { createContext, useState, useContext } from "react";

export interface ChatUIContextType {
  isConversationListOpen: boolean;
  setIsConversationListOpen: (value: boolean) => void;
  isChatPinpointsOpen: boolean;
  setIsChatPinpointsOpen: (value: boolean) => void;
}
const ChatUIContext = createContext({
  isConversationListOpen: false,
  setIsConversationListOpen: (value: boolean) => { },
  isChatPinpointsOpen: false,
  setIsChatPinpointsOpen: (value: boolean) => { },
});

interface Props {
  children: React.ReactNode
}

export const ChatUIProvider = ({ children }: Props) => {
  const [isConversationListOpen, setIsConversationListOpen] = useState(false);
  const [isChatPinpointsOpen, setIsChatPinpointsOpen] = useState(false);
  console.log("chatui provider", { isConversationListOpen, isChatPinpointsOpen });
  return (
    <ChatUIContext.Provider
      value={{
        isConversationListOpen,
        setIsConversationListOpen,
        isChatPinpointsOpen,
        setIsChatPinpointsOpen,
      }}
    >
      <h1>{isConversationListOpen}</h1>
      {children}
    </ChatUIContext.Provider>
  );
};

export const useChatUI = () => useContext(ChatUIContext);
