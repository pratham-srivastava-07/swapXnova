"use client"

import { useSession } from "next-auth/react"
import { Button } from "../ui/button"

import Link from "next/link"

export default function ShowButton() {
    const  {data: session} = useSession()
    return <div>
        <Link href={session ? "/exchange" : "/api/auth/signin"}><Button variant={"outline"}>Swap Now!</Button></Link>
    </div>
}