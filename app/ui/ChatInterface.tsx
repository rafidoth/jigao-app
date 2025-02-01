"use client"
import React from 'react';
import Chat from '@/app/ui/Chat';
import ChatContextMenuList from '@/app/ui/ChatContextMenuList';
import ChatPinpoints from '@/app/ui/ChatPinpoints';
import { useChatUI, ChatUIProvider } from '@/app/ui/ChatUIContext';




export default function ChatInterface() {
  return (
    <ChatUIProvider>
      <ChatContainer />
    </ChatUIProvider>
  );
}


function ChatContainer() {
  const chatUI = useChatUI()
  return (
    <div className="flex bg-stone-950 justify-center h-screen" >
      {chatUI.isConversationListOpen && <ChatContextMenuList />}
      < Chat />
      {chatUI.isChatPinpointsOpen && <ChatPinpoints />}
    </div >)
}
