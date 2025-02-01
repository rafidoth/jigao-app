import React from 'react';
import { ViewVerticalIcon, DrawingPinIcon } from "@radix-ui/react-icons"
import ChatMessages from './ChatMessages';
import ChatHeader from '@/app/ui/ChatHeader';


export default function Chat() {
  return (
    <div className="flex flex-grow justify-center  h-full py-5">
      <div className="flex flex-col w-[800px]">
        <ChatHeader />
        <ChatMessages />
      </div>
    </div>

  );
}
