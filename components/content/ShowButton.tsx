"use client"

import { signIn, useSession } from "next-auth/react"
import { Button } from "../ui/button"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function ShowButton() {
    const router = useRouter()
    const  {data: session} = useSession()
    return <div>
        {session ? (<div>
            <Link href={"/exchange"}><Button variant={"outline"}>Swap Now!</Button></Link>
        </div>) : (<div>
            <Link href={"/api/auth/signin"}><Button variant={"outline"}>Swap Now!</Button></Link>
        </div>) }
    </div>
}