"use client"
import React from 'react'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"



const iconSize = { width: "24px", height: "24px" }


export default function ThemeChanger() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])
  if (!mounted) return null
  const dark = <button onClick={() => setTheme('dark')}><MoonIcon style={iconSize} /></button>
  const light = <button onClick={() => setTheme('light')}><SunIcon style={iconSize} /></button>
  return (
    <div className={`hover:bg-accent w-[40px] h-[40px] p-2 rounded-full`}>
      {theme === 'dark' ? light : dark}
    </div>
  )
}
