"use client"

import { signIn, useSession } from "next-auth/react"
import { Button } from "../ui/button"
import { useRouter } from "next/navigation"

export default function ShowButton() {
    const router = useRouter()
    const  {data: session} = useSession()
    return <div>
        {session ? (<div>
            <Button variant={"outline"} onClick={() => router.push("/exchange")}>Swap Now!</Button>
        </div>) :(<div>
            <Button variant={"outline"} onClick={() => signIn()}>Swap Now!</Button>
        </div>) }
    </div>
}