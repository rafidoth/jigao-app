"use client"

import type React from "react"
import { useState, useEffect } from "react"

const AIQuizHero: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showNewQuestion, setShowNewQuestion] = useState(false)

  useEffect(() => {
    if (selectedAnswer !== null) {
      const timer = setTimeout(() => {
        setShowNewQuestion(true)
        setSelectedAnswer(null)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [selectedAnswer])

  const handleAnswerClick = (index: number) => {
    setSelectedAnswer(index)
    setShowNewQuestion(false)
  }

  return (
    <div className="relative h-screen w-full overflow-hidden 
    bg-gradient-to-br from-amber-400 to-amber-600">
      <div className="absolute inset-0">
        <svg
          className="h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background pattern */}
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />

          {/* Subtle animated elements */}
          <circle className="animate-pulse-slow" cx="20" cy="30" r="3" fill="rgba(255,255,255,0.3)" />
          <circle className="animate-pulse-slow" cx="80" cy="70" r="4" fill="rgba(255,255,255,0.3)" />
          <circle className="animate-pulse-slow" cx="50" cy="50" r="2" fill="rgba(255,255,255,0.3)" />

          {/* Connected nodes representing AI */}
          <g className="animate-float-slow">
            <line x1="30" y1="20" x2="70" y2="80" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
            <circle cx="30" cy="20" r="1.5" fill="rgba(255,255,255,0.5)" />
            <circle cx="70" cy="80" r="1.5" fill="rgba(255,255,255,0.5)" />
          </g>
        </svg>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl">AI-Powered Quiz</h1>
          <p className="mb-8 text-xl text-white opacity-80">Challenge your mind with intelligent questions</p>
        </div>

        {/* Quiz choice animation */}
        <div className="w-full max-w-md rounded-lg bg-white bg-opacity-20 p-6 backdrop-blur-sm">
          <h2 className="mb-4 text-2xl font-semibold text-white">Sample Question</h2>
          <p className="mb-6 text-lg text-white">What is the capital of France?</p>
          <div className="space-y-3">
            {["London", "Berlin", "Paris", "Madrid"].map((answer, index) => (
              <button
                key={index}
                className={`w-full rounded-md py-2 px-4 text-left text-white 
                  transition-all duration-300 
                  ${selectedAnswer === index ?
                    "bg-green-500" : "bg-white bg-opacity-20 hover:bg-opacity-30"
                  } ${showNewQuestion ? "opacity-0" : "opacity-100"}`}
                onClick={() => handleAnswerClick(index)}
              >
                {answer}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AIQuizHero

