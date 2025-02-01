import React from 'react';
import ChatBubble from './ChatBubble';

const chatHistory = [
  {
    from: "user",
    text: "Hello, how are you?"
  },
  {
    from: "ai",
    text: "I'm just a program, so I don't have feelings, but I'm here to help you! How can I assist you today?"
  },
  {
    from: "user",
    text: "Can you tell me something interesting about space?"
  },
  {
    from: "ai",
    text: "Sure! Did you know that space is completely silent? There is no atmosphere in space, which means that sound has no medium or way to travel to be heard."
  },
  {
    from: "user",
    text: "That's fascinating! What else can you tell me?"
  },
  {
    from: "ai",
    text: "Another interesting fact is that a day on Venus is longer than a year on Venus. It takes Venus longer to rotate once on its axis than it does for the planet to complete one orbit around the sun."
  },
  {
    from: "user",
    text: "Wow, I didn't know that. Thanks for the information!"
  },
  {
    from: "ai",
    text: "You're welcome! If you have any more questions, feel free to ask."
  }
]
export default function ChatMessages() {
  return (
    <div className="w-full py-2 h-[500px] overflow-scroll">
      {chatHistory.map((chat, index) => (
        <ChatBubble key={index} text={chat.text} isUser={chat.from === "user"} />
      ))}
      <ChatBubble text="Hello" isUser={true} />
      <ChatBubble text="Hi" isUser={false} />
      <ChatBubble text="What is Today's top news?" isUser={true} />
      <ChatBubble text="There happened actually a lot of things. Somewhere in country" isUser={false} />
    </div>
  );
}
