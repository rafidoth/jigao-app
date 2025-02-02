import React from 'react';
import ChatMessages from './ChatMessages';
import ChatHeader from '@/app/ui/ChatHeader';
import { PaperPlaneIcon } from "@radix-ui/react-icons"
import { Button } from '@/components/ui/button';
import { useChatHistory } from '@/app/ui/ChatHistoryContext';
import type { CoreMessage } from 'ai';
import { StreamContextProvider, useStream } from '@/app/ui/StreamContext';
import ChatUserInput from '@/app/ui/ChatUserInput';

export default function Chat() {
  return (
    <div className="flex flex-grow justify-center  h-full py-5">
      <div className="flex flex-col w-[800px]">
        <StreamContextProvider>
          <ChatHeader />
          <ChatMessages />
          <ChatUserInput />
        </StreamContextProvider>
      </div>
    </div>

  );
}
