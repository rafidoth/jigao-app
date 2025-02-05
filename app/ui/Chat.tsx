import React from 'react';
import ChatMessages from './ChatMessages';
import ChatHeader from '@/app/ui/ChatHeader';
import { StreamContextProvider } from '@/app/ui/StreamContext';
import ChatUserInput from '@/app/ui/ChatUserInput';

export default function Chat() {
  return (
    <div className="flex flex-grow justify-center  h-full p-2 ">
      <div className="flex flex-col w-[800px] ">
        <StreamContextProvider>
          <ChatHeader />
          <ChatMessages />
          <ChatUserInput />
        </StreamContextProvider>
      </div>
    </div>

  );
}
