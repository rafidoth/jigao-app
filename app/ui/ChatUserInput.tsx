import React from 'react'
import { PaperPlaneIcon } from "@radix-ui/react-icons"
import { Button } from '@/components/ui/button';
import type { CoreMessage } from 'ai';
import { useStream } from '@/app/ui/StreamContext';
import { useChatHistory } from '@/app/ui/ChatHistoryContext';

function processStreamChunk(chunk: string) {
  let processedContent = '';
  // Each line in the chunk represents a key-value pair separated by ':'
  const lines = chunk.split('\n');
  for (const line of lines) {
    // Skip empty lines
    if (!line.trim()) continue;
    // Find the position of the first colon
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) continue;
    // Get the key and value parts
    const key = line.substring(0, colonIndex);
    let value = line.substring(colonIndex + 1);
    try {
      // Parse the value as JSON to handle escaped characters properly
      value = JSON.parse(value);
      // Handle different types of chunks
      if (key === 'f') {
        // ignoring this
        continue
      } else if (key === '0') {
        // This is a content chunk
        processedContent += value;
      }
    } catch (error) {
      console.error('Error parsing chunk value:', error);
      continue;
    }
  }
  return processedContent;
}

export default function ChatUserInput() {
  const [userInput, setUserInput] = React.useState("");
  const { setMessages } = useChatHistory()
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const { setReply, setLoading } = useStream()
  const handleOnClick = async () => {
    setLoading(true)
    setMessages((prev: CoreMessage[]) => [...prev, { role: 'user', content: userInput } as CoreMessage])
    setUserInput("")
    let reader = null
    try {
      const response = await fetch('KumirsFirstTalk/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newMessage: { role: 'user', content: userInput } }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const stream = response.body
      reader = stream!.getReader();
      const decoder = new TextDecoder();
      let done = false;
      let accumulatedData = '';

      while (!done) {
        const result = await reader?.read();
        if (!result) {
          throw new Error("Stream read failed.");
        }
        const { value, done: streamDone } = result;
        done = streamDone;
        const chunk = decoder.decode(value, { stream: true });
        const processedContent = processStreamChunk(chunk);
        console.log('Processed content:', processedContent);
        accumulatedData += processedContent;
        setReply(accumulatedData)
      }

      setMessages((prev: CoreMessage[]) => [...prev, { role: 'assistant', content: accumulatedData } as CoreMessage])
      setLoading(false)
    } catch (error) {
      console.error('Error:', error);
    } finally {
      reader?.releaseLock();
    }
  }
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleOnClick();
    } else if (event.ctrlKey && event.key === 'k') {
      event.preventDefault();
      inputRef.current?.focus()
    }
  };
  return (
    <div className={`w-full h-[80px] px-5 flex items-center border-dashed border rounded-md p-2`}>
      <input
        ref={inputRef}
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type a message (Ctrl + K)"
        className="flex-grow outline-none border-none focus-visible:outline-none focus:border-none focus:text-green-500  bg-stone-950" />
      <Button
        variant="outline"
        onClick={handleOnClick}>
        <PaperPlaneIcon />
      </Button>
    </div >)
}

