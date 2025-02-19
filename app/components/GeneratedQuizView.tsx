import { useState } from "react";
import { QuizType } from "@/app/utils/types";
import Quiz from "@/app/components/Quiz";
import { cn } from "@/lib/utils";
import { CiBoxList, CiGrid41 } from "react-icons/ci";

interface GeneratedQuizViewProps {
  generating: boolean;
  fetchedQuizes: QuizType[];
}

export default function GeneratedQuizView({
  generating,
  fetchedQuizes,
}: GeneratedQuizViewProps) {
  const [grid, setGrid] = useState<boolean>(true);
  console.log("fetchedQuizes", fetchedQuizes);
  return (
    <div className={`w-full max-h-full overflow-hidden  py-2 flex flex-col`}>
      <div className={cn("flex justify-between h-[100px] px-6")}>
        <div>{fetchedQuizes.length} Questions Generated</div>
        <div className="cursor-pointer">
          {grid ? (
            <CiBoxList onClick={() => setGrid(false)} />
          ) : (
            <CiGrid41 onClick={() => setGrid(true)} />
          )}
        </div>
      </div>
      {!generating && fetchedQuizes.length > 0 && (
        <div
          className={cn(
            "h-[800px] flex overflow-auto scrollbar ",
            grid && "flex-wrap",
            !grid && "flex-col",
            "scrollbar-thumb-zinc-800",
            "gap-4 items-center"
          )}
        >
          {fetchedQuizes.map((quiz, index) => (
            <Quiz key={index} quiz={quiz} />
          ))}
        </div>
      )}

      {generating && (
        <div className="flex justify-center items-center">
          <p>Generating...</p>
        </div>
      )}
    </div>
  );
}
