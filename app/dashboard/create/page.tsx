"use client"
import { useState } from "react"
import { MagicWandIcon } from "@radix-ui/react-icons"
import { QuizType } from "@/app/utils/types"
import InputSection from "@/app/components/InputSection"
import GeneratedQuizView from "@/app/components/GeneratedQuizView"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

export default function CreatePage() {
  const [content, setContent] = useState<string>("")
  const [Instructions, setInstructions] = useState<string>("")
  const [fetchedQuizes, setFetchedQuizes] = useState<QuizType[]>([])
  const [quizCount, setQuizCount] = useState<number>(0)
  const [generating, setGenerating] = useState<boolean>(false)


  const handleGenerate = async () => {
    if (content.length === 0) {
      console.log("No content");
      return;
    }
    if (quizCount === 0) {
      console.log("No quiz count");
      return;
    }
    console.log("Generating quiz");
    const data = {
      knowledge: content,
      instructions: Instructions,
      quantity: quizCount
    }
    setGenerating(true)
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const { object } = await response.json();
      setFetchedQuizes(object)
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setGenerating(false)
    }
  }

  const options = Array.from({ length: 30 }, (_, i) => i + 1);
  return <main className=" flex flex-col w-full h-full">
    <div
      className={`w-full h-[60px] flex justify-center items-center
        border mb-2 rounded rounded-sm `}
    >
      <button
        className={`
          flex justify-center items-center
          hover:text-rose-500 hover:font-bold rounded rounded-sm
          px-2 py-1
        `}
        onClick={handleGenerate}
      >Generate<MagicWandIcon /> </button>
      <select
        className="bg-transparent cursor-pointer"
        onChange={(e) => setQuizCount(parseInt(e.target.value))}
      >
        <option value={0}>How many?</option>
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    </div>
    {/* This section will be a draggable window with a divider*/}
    <section className={`w-full h-full flex-1 gap-x-2 flex `}>
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel minSize={30}>
          <InputSection
            content={content}
            setContent={setContent}
            Instructions={Instructions}
            setInstructions={setInstructions}
          />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={30} minSize={30}>
          <GeneratedQuizView
            generating={generating}
            fetchedQuizes={fetchedQuizes}
          />
        </ResizablePanel>
      </ResizablePanelGroup>
    </section>
  </main >
}


function getDummyResponse() {

}
