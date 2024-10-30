"use client"

import { useSession } from "next-auth/react"
import { Button } from "../ui/button"

import Link from "next/link"

export default function ShowButton() {
    return <div>
        <Link href={""}><Button variant={"outline"}>Swap Now!</Button></Link>
    </div>
}