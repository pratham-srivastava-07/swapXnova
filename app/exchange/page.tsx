"use client"
import Exchange from "@/pages/Exchange";
import { useEffect, useState } from "react";

export default function Exchangepage() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null; 
    }
    return <div className="h-screen">
        <Exchange />
    </div>
}
