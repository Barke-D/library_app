"use client";

import {
  HomeIcon,
  SearchIcon,
  BotIcon,
  MessageSquareTextIcon,
  UsersIcon,
  CircleUserRoundIcon,
  UserRoundPlusIcon,
  LogInIcon,
  BellDotIcon,
} from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <aside className="sidebar border shadow-lg shadow-indigo-500/40 fixed h-screen">
      <div className="ml-5 font-semibold text-2xl">
        <Link href="/">DigitalLab</Link>
      </div>
      <div className="mt-5 flex flex-col items-start justify-start">
        <Link href="/home" className="flex flex-row gap-3 mt-7 ml-5">
          <HomeIcon />
          <p>Home</p>
        </Link>
        <Link href="/explore" className="flex flex-row gap-3 mt-7 ml-5">
          <SearchIcon />
          <p>Explore</p>
        </Link>
        <Link href="/create-thread" className="flex flex-row gap-3 mt-7 ml-5">
          <MessageSquareTextIcon />
          <p>Forums</p>
        </Link>
        <Link href="/communities" className="flex flex-row gap-3 mt-7 ml-5">
          <UsersIcon />
          <p>Community</p>
        </Link>
        <Link href="/assistance" className="flex flex-row gap-3 mt-7 ml-5">
          <BotIcon />
          <p>Assistance</p>
        </Link>
        <Link href="/assistance" className="flex flex-row gap-3 mt-7 ml-5">
          <BellDotIcon />
          <p>Activity</p>
        </Link>
        <Link href="/profile" className="flex flex-row gap-3 mt-7 ml-5">
          <CircleUserRoundIcon />
          <p>Profile</p>
        </Link>
        <SignedIn>
          <div className="mb-10 absolute bottom-0 bg-slate-300 rounded-full p-2">
            <UserButton afterSignOutUrl="/" showName />
          </div>
        </SignedIn>
        <SignedOut>
          <Link href="/sign-up" className="flex flex-row gap-3 mt-7 ml-5">
            <UserRoundPlusIcon />
            <p>New Account</p>
          </Link>
          <Link href="/sign-in" className="flex flex-row gap-3 mt-7 ml-5">
            <LogInIcon />
            <p>Login</p>
          </Link>
        </SignedOut>
      </div>
    </aside>
  );
};

export default Sidebar;
