import React from 'react';
import { ViewVerticalIcon, DrawingPinIcon } from "@radix-ui/react-icons"
import { useChatUI } from '@/app/ui/ChatUIContext';

const iconSize = { width: "24px", height: "24px" }

export default function ChatHeader() {
  const chatui = useChatUI();
  return (

    <div className="flex justify-between text-3xl p-2 ">
      <button onClick={() => chatui.setIsConversationListOpen(!chatui.isConversationListOpen)}><ViewVerticalIcon style={iconSize} /></button>
      <button onClick={() => chatui.setIsChatPinpointsOpen(!chatui.isChatPinpointsOpen)}> <DrawingPinIcon style={iconSize} /></button>
    </div>
  );
}
