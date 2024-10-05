"use client"

import { useSession, signIn, signOut } from "next-auth/react"
import { Button } from "../ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
export default function Appbar() {
    const {data: session} = useSession();
    return <div>
        { !session ? (<div className="flex justify-between items-center p-5 ">
            <div className="flex justify-center items-center space-x-3 font-bold text-xl">
                swapXnova
            </div>
            <div className="flex justify-center items-center space-x-5 font-semibold pr-5">
                <div className="about cursor-pointer">About</div>
                <div className=""><Button variant={"outline"} className="btn cursor-pointer rounded-full" onClick={() => signIn()}>Signin</Button></div>
            </div>
        </div> ) : ( <div>
        <div className="flex justify-between items-center p-5  border-b">
            <div className="flex justify-center items-center space-x-3 font-bold text-xl">
                swapXnova
            </div>
            <div className="flex justify-center items-center space-x-5 font-semibold pr-5">
                <div className="about cursor-pointer">About</div>
                <div>
                <DropdownMenu>
                 <DropdownMenuTrigger className="bg-white text-black p-2 font-semibold rounded-full focus:outline-none">{session.user?.name?.split(" ").map((name) => name[0]).join("")}</DropdownMenuTrigger>
                     <DropdownMenuContent>
                        <DropdownMenuLabel>Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>jdnidhduif</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                </div>
            </div>
        </div>
        </div> )}
    </div>
}