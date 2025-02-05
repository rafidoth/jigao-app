"use client"
import React from 'react';
import Chat from '@/app/ui/Chat';
import ChatContextMenuList from '@/app/ui/ChatContextMenuList';
import ChatPinpoints from '@/app/ui/ChatPinpoints';
import { useChatUI, ChatUIProvider } from '@/app/ui/ChatUIContext';
import { v4 as uuidv4 } from 'uuid';
import { ChatHistoryProvider } from '@/app/ui/ChatHistoryContext';



export default function ChatInterface() {
  return (
    <ChatHistoryProvider>
      <ChatUIProvider>
        <ChatContainer />
      </ChatUIProvider>
    </ChatHistoryProvider>
  );
}

interface Conversation {
  id: string
  Title: string
  ChatComponent: React.ReactNode
}


function CreateNewChat() {
  return {
    id: uuidv4(),
    Title: "New Chat",
    ChatComponent: <Chat />
  } as Conversation
}


function ChatContainer() {
  const [conversationList, setConversationList] = React.useState<Conversation[]>([CreateNewChat()])
  const [selectedConversation, setSelectedConversation] = React.useState<Conversation>(conversationList[0])
  const chatUI = useChatUI()
  return (
    <div className="flex bg-stone-950 justify-center h-screen" >
      {chatUI.isConversationListOpen &&
        <ChatContextMenuList
          convList={conversationList}
          setConversationList={setConversationList}
        />}
      {selectedConversation.ChatComponent}
      {chatUI.isChatPinpointsOpen && <ChatPinpoints />}
    </div >)
}
