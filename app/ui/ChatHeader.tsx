import React from 'react';
import { ViewVerticalIcon, DrawingPinIcon } from "@radix-ui/react-icons"
import { Kumir } from '@/app/ui/KumirIcon'
import { useChatUI } from '@/app/ui/ChatUIContext';

const iconSize = { width: "24px", height: "24px" }

export default function ChatHeader() {
  const chatui = useChatUI();
  return (

    <div className="flex justify-between text-3xl p-2 border-l border-r border-t rounded-md border-dashed ">
      <button onClick={() => chatui.setIsConversationListOpen(!chatui.isConversationListOpen)}><ViewVerticalIcon style={iconSize} /></button>
      <span className="flex gap-2 text-lg"><Kumir className={`w-8 h-8`} />Kumir's First Talk</span>
      <button onClick={() => chatui.setIsChatPinpointsOpen(!chatui.isChatPinpointsOpen)}> <DrawingPinIcon style={iconSize} /></button>
    </div>
  );
}
