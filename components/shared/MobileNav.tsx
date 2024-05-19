import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import {
  BellDotIcon,
  BotIcon,
  CircleUserRoundIcon,
  HomeIcon,
  LogInIcon,
  MenuIcon,
  MessageSquareTextIcon,
  SearchIcon,
  UserRoundPlusIcon,
  UsersIcon,
} from "lucide-react";
import Link from "next/link";

interface Props {}

const MobileNav = (props: Props) => {
  return (
    <div className="mobilnav w-full flex flex-row items-center justify-between">
      <div className="ml-5 font-semibold text-2xl">
        <Link href="/">DigitalLab</Link>
      </div>
      <Sheet>
        <SheetTrigger>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              <div className="text-left ml-5 font-semibold text-2xl">
                DigitalLab
              </div>
            </SheetTitle>
            <SheetDescription>
              <div className="flex flex-col items-start justify-start">
                <Link href="/home" className="flex flex-row gap-4 mt-10 ml-5">
                  <HomeIcon />
                  <p className="text-xl font-bold">Home</p>
                </Link>
                <Link
                  href="/explore"
                  className="flex flex-row gap-4 mt-10 ml-5"
                >
                  <SearchIcon />
                  <p className="text-xl font-bold">Explore</p>
                </Link>
                <Link
                  href="/create-thread"
                  className="flex flex-row gap-4 mt-10 ml-5"
                >
                  <MessageSquareTextIcon />
                  <p className="text-xl font-bold">Forums</p>
                </Link>
                <Link
                  href="/communities"
                  className="flex flex-row gap-4 mt-10 ml-5"
                >
                  <UsersIcon />
                  <p className="text-xl font-bold">Community</p>
                </Link>
                <Link
                  href="/assistance"
                  className="flex flex-row gap-4 mt-10 ml-5"
                >
                  <BotIcon />
                  <p className="text-xl font-bold">Assistance</p>
                </Link>
                <Link
                  href="/assistance"
                  className="flex flex-row gap-4 mt-10 ml-5"
                >
                  <BellDotIcon />
                  <p className="text-xl font-bold">Activity</p>
                </Link>
                <Link
                  href="/profile"
                  className="flex flex-row gap-4 mt-10 ml-5"
                >
                  <CircleUserRoundIcon />
                  <p className="text-xl font-bold">Profile</p>
                </Link>
                <SignedIn>
                  <div className="mb-10 w-64 absolute bottom-0 bg-slate-300 p-2 flex-start items-start rounded-full">
                    <UserButton afterSignOutUrl="/" showName />
                  </div>
                </SignedIn>
                <SignedOut>
                  <Link
                    href="/sign-up"
                    className="flex flex-row gap-3 mt-7 ml-5 "
                  >
                    <UserRoundPlusIcon />
                    <p className="text-xl font-bold">New Account</p>
                  </Link>
                  <Link
                    href="/sign-in"
                    className="flex flex-row gap-3 mt-7 ml-5"
                  >
                    <LogInIcon />
                    <p className="text-xl font-bold">Login</p>
                  </Link>
                </SignedOut>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
