"use client";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { ViewVerticalIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { QuizsetType } from "@/app/utils/types";
import { useQuizSetCtx } from "@/app/contexts/Quizset.context";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { IoIosCreate } from "react-icons/io";
import { TbCardsFilled } from "react-icons/tb";
import { PiBookmarkSimpleFill } from "react-icons/pi";
import { IoTime } from "react-icons/io5";
import { fetchQuizSetsOfUserFromDB } from "@/app/utils/db";
import { FaHistory } from "react-icons/fa";
const sidebarItems = [
  {
    title: "Dashboard",
    route: "/dashboard/user",
    icon: <TbLayoutDashboardFilled />,
  },
  {
    title: "My Quizzes",
    route: "/dashboard/myquizzes",
    icon: <TbCardsFilled />,
  },
  {
    title: "Bookmarks",
    route: "/dashboard/bookmarks",
    icon: <PiBookmarkSimpleFill />,
  },
  {
    title: "Take a Quiz",
    route: "/dashboard/takeaquiz",
    icon: <IoTime />,
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
  const { Quizsets, setQuizsets } = useQuizSetCtx();
  console.log(currentPath);

  // if (!isLoaded) {
  //   return <div>Loading...</div>;
  // }

  useEffect(() => {
    if (isLoaded) {
      if (user && user.id) {
        const fn = async function () {
          const fetchedQuizsets: QuizsetType[] =
            await fetchQuizSetsOfUserFromDB(user.id);
          setQuizsets(fetchedQuizsets);
        };
        fn();
      } else {
        throw new Error("Error occured in fetching quizsets from DB ");
      }
    }
  }, [isLoaded, user]);
  return (
    <nav
      className={`w-[240px] flex flex-col bg-transparent  border-r border-dashed`}
    >
      <div
        className={`w-full flex items-center 
        flex-row justify-between  my-4`}
      >
        <Link href="/dashboard/quizset/text/new">
          <div
            className="flex items-center justify-center  hover:bg-accent
        rounded-md gap-x-2 px-2 font-semibold cursor-pointer"
          >
            Create <IoIosCreate />
          </div>
        </Link>
        <ViewVerticalIcon
          onClick={toggleSidebarAction}
          className={`cursor-pointer hover:text-white/50 w-6 h-6 mx-4`}
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
              flex items-center gap-x-2 p-2 
              rounded-l-md
              hover:bg-zinc-900 hover:text-white
              cursor-pointer
            `}
            >
              <span
                className={`flex gap-2 items-center justify-center
                  ${
                    currentPath.startsWith(item.route)
                      ? "font-bold bg-jigao  rounded px-2 text-white "
                      : ""
                  } 
                  `}
              >
                {item.icon}
                {item.title}
              </span>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex flex-col ">
        <div className="w-full  font-semibold flex gap-2 items-center justify-start py-2">
          <FaHistory /> Recent Quizsets
        </div>
        {Quizsets.length > 0 &&
          Quizsets.map((quizset, index) => {
            return (
              <Link href={`/dashboard/quizset/text/${quizset.id}`} key={index}>
                <div
                  className={`w-full border-dashed 
                ${index === 0 ? "border-y" : ""} border-b
                ${currentPath.endsWith(quizset.id) ? "bg-accent " : ""}
              flex items-center gap-x-2 p-2 
              hover:bg-zinc-900
              hover:text-white
              cursor-pointer`}
                >
                  {quizset.title?.slice(0, 20)}
                  ....
                </div>
              </Link>
            );
          })}
      </div>
    </nav>
  );
}
