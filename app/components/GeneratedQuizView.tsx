import { QuizType } from "@/app/utils/types"
import Quiz from "@/app/components/Quiz"


interface GeneratedQuizViewProps {
  generating: boolean,
  fetchedQuizes: QuizType[],
}



export default function GeneratedQuizView(
  {
    generating,
    fetchedQuizes,
  }: GeneratedQuizViewProps
) {
  console.log("fetchedQuizes", fetchedQuizes);
  return <div
    className={`
          w-full max-h-full   
          overflow-hidden px-6 py-2 flex flex-col
        `}
  >
    <div className={`flex h-[100px] items-center justify-center 
      font-semibold`}>
      {fetchedQuizes.length} Questions Generated
    </div>
    {
      !generating &&
      fetchedQuizes.length > 0 &&
      <div className="h-[700px]  flex flex-col overflow-scroll">
        {
          fetchedQuizes.map((quiz, index) => (
            <Quiz key={index} quiz={quiz} />
          ))
        }
      </div>

    }

    {
      generating &&
      <div className="flex justify-center items-center">
        <p>Generating...</p>
      </div>
    }
    {
      !generating &&
      fetchedQuizes.length !== 0 &&
      <button><span
        className={`bg-rose-900/80 text-white px-1 px-2 rounded`}
      >Export</span></button>
    }
  </div>
} 
