"use client";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { ViewVerticalIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { QuizsetType } from "@/app/utils/types";
import { useQuizSetCtx } from "@/app/contexts/Quizset.context";

const sidebarItems = [
  {
    title: "Dashboard",
    route: "/dashboard/user",
  },
  {
    title: "Create New Quiz Set",
    route: "/dashboard/create",
  },
  {
    title: "My Quizzes",
    route: "/dashboard/myquizzes",
  },
  {
    title: "Bookmarks",
    route: "/dashboard/bookmarks",
  },
  {
    title: "Take a Quiz",
    route: "/dashboard/takeaquiz",
  },
];

interface SidebarProps {
  sidebar: Boolean;
  toggleSidebarAction: () => void;
}

export default function Sidebar({
  sidebar,
  toggleSidebarAction,
}: SidebarProps) {
  const { isLoaded, user } = useUser();
  const currentPath = usePathname();
  const quizsetCtx = useQuizSetCtx();
  const recentQuizsets: QuizsetType[] = quizsetCtx.QuizsetID;
  console.log(currentPath);

  if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    console.log(user);
  }

  return (
    <nav className={`w-[240px] bg-transparent px-2`}>
      <div
        className={`w-full flex items-center 
        flex-row-reverse px-10 my-4`}
      >
        <ViewVerticalIcon
          onClick={toggleSidebarAction}
          className={`cursor-pointer hover:bg-accent w-6 h-6`}
        />
      </div>
      <div className={`w-full flex gap-x-2 my-10`}>
        <div>
          {user?.hasImage && (
            <Image
              src={user.imageUrl}
              alt={"user image"}
              width={50}
              height={50}
              className={`rounded-full`}
            />
          )}
        </div>
        <div className={`flex flex-col`}>
          <strong>{user?.fullName}</strong>
          <span>Free Tier</span>
        </div>
      </div>
      <div className={`my-4`}>
        {sidebarItems.map((item, index) => (
          <Link href={item.route} key={index}>
            <div
              className={`
              flex items-center gap-x-2 p-2 rounded-md
              hover:bg-accent
              cursor-pointer
            `}
            >
              <span
                className={`
                  ${
                    currentPath.startsWith(item.route)
                      ? "font-bold bg-black dark:bg-white rounded px-2 text-white dark:text-black"
                      : "text-black dark:text-white"
                  } 
                  `}
              >
                {item.title}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
}
