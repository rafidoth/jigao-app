import LargeTextInputField from "@/app/components/LargeTextInputField"

interface InputSectionProps {
  content: string,
  setContent: (content: string) => void,
  Instructions: string,
  setInstructions: (Instructions: string) => void
}


export default function InputSection({
  content,
  setContent,
  Instructions,
  setInstructions
}: InputSectionProps) {
  return <div className={`w-full h-full flex flex-col 
      `}>
    <div className="flex-1 p-2 overflow-scroll">
      <LargeTextInputField
        text={content}
        setText={setContent}
      />
    </div>
  </div>
} 
