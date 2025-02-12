"use client"
import React from 'react';
import ThemeChanger from './ThemeChanger';
import Link from 'next/link';
import Logo from './Logo';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { useTheme } from 'next-themes';
const arr = [
  "Getting Started",
  "Guides",
  "Community",
  "Pricing",
  "Contact",
]

export default function NavigationBar() {
  const { theme } = useTheme()
  console.log(theme)
  return <main className={`w-[1200px] flex flex-col justify-center items-center`}>
    <div className={`flex w-full h-[100px] justify-between items-center`}>
      <div className="flex">
        <Logo src="/logo.png" />
      </div>
      <div className="flex w-full h-full justify-center items-center">
        {arr.map((item, index) => {
          return < NavigationMenu key={index}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {item}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu >
        })}
      </div>
      <ThemeChanger />
    </div>
  </main>
}
