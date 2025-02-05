"use client"
import React from 'react';
import ThemeChanger from './ThemeChanger';
import Link from 'next/link';
import Logo from './Logo';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
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
  return <div className={`flex w-full h-[100px] justify-between items-center`}>
    <div className="flex">
      {theme === "light" ? <Logo src="/black.png" /> : <Logo src="/white.png" />}
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
}
