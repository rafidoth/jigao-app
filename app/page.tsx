import { Button } from "@/components/ui/button";
import { specialElite, inter, spaceMono, exo } from "./utils/font";
import NavigationBar from "./components/NavigationBar";
import Image from "next/image";

export default function Home() {
  return (
    <main className={`w-full  flex flex-col justify-center items-center`}>
      <NavigationBar />
      <div
        className="w-full flex flex-col items-center 
        justify-center gap-3 "
      >
        <div
          className={`w-[1200px] h-[600px] flex flex-col justify-center items-center rounded px-10 bg-transparent`}
        >
          <div className={`${inter.className} text-2xl`}>
            <h1 className={`motion-preset-fade`}>
              {`The gem cannot be polished without 
                friction, nor man perfected without trials.`}
            </h1>
          </div>
          <div
            className={`${exo.className} motion-preset-shrink font-semibold my-6 text-7xl`}
          >
            AI-Powered
            <span
              className={`mx-2 px-2 rounded-sm bg-gradient-to-r from-rose-500 to-yellow-500 bg-clip-text text-transparent `}
            >
              Quiz
            </span>
            Station
          </div>
          <div className={`my-10 gap-x-4 flex items-center`}>
            <Image
              src="/book.png"
              alt="book"
              width={70}
              height={70}
              className={`motion-preset-seesaw`}
            />
            <Image
              src="/ai.png"
              alt="book"
              width={70}
              height={70}
              className={`motion-preset-seesaw`}
            />
            <Image
              src="/quiz.png"
              alt="book"
              width={70}
              height={70}
              className={`motion-preset-seesaw`}
            />
          </div>
          <div className={`${spaceMono.className} py-2 font-semibold text-2xl`}>
            Learn Smarter, Not Harder
          </div>
          <Button variant="default">Get Started</Button>
        </div>
      </div>
    </main>
  );
}
