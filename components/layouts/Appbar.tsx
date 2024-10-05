"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { LockOpen1Icon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Appbar() {
  const { data: session } = useSession();

  return (
    <div className="flex justify-between items-center p-5">
      
      <div className="flex justify-center items-center space-x-3 font-bold text-2xl">
        swapXnova
      </div>

      <div className="flex justify-center items-center space-x-5 font-semibold pr-5">
        <Link href={"/about"}><div className="about cursor-pointer">About</div></Link>
        {!session ? (
          <Button
            variant={"outline"}
            className="btn cursor-pointer rounded-full"
            onClick={() => signIn()}
          >
            Sign In
          </Button>
        ) : (
        <>
        <Popover>
            <PopoverTrigger className="border rounded-full p-2">
                {session.user?.name?.split(" ").map((name) => name[0]).join("")}
            </PopoverTrigger>
            <PopoverContent className='p-2 space-y-3 divide-y'>
            <div className="text-sm px-4">
     <p >{session?.user?.email}</p>
     <p className='text-gray-500'>{session.user?.name}</p>
     </div>
     <Button 
     variant="ghost" 
     className='w-full flex items-center justify-between'
     onClick={() => signOut()}
     >
            Logout
          <LockOpen1Icon/>
     </Button>
            </PopoverContent>
        </Popover>
        </>
        )}
      </div>
    </div>
  );
}
