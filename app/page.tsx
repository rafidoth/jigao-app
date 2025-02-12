import { Button } from "@/components/ui/button";
import { specialElite, inter } from "./utils/font";
import NavigationBar from "./components/NavigationBar";
export default function Home() {
  return (

    <main className={`w-full flex flex-col justify-center items-center`}>
      <NavigationBar />
      <div
        className="w-full flex flex-col items-center 
        justify-center gap-3 "
      >
        <div
          className={`w-[1200px] h-[600px] flex flex-col justify-center 
          items-center border dark:border-stone-800/70 rounded rounded-sm 
          px-10 bg-white dark:bg-[#121212]`}
        >
          <div className={`${specialElite.className} text-2xl`}>
            "The gem cannot be polished without friction, nor man perfected without trials."
          </div>
          <div className={`${inter.className} font-black text-7xl`}>
            AI-Powered<span className={`px-2 text-rose-900`}> Quiz</span> Station
          </div>
          <div className={`${inter.className} text-2xl`}>
            Learn Smarter, Not Harder
          </div>
          <Button variant="default">Get Started</Button>
        </div>
      </div>
    </main>
  );
}


