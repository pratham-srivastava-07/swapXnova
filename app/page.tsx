"use client"
import { useState, useEffect } from "react";
import Hero from "@/components/content/Hero";
import Exchange from "@/pages/Exchange";


export default function Home() {
  const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null; 
    }
  return (
   <div className="pt-10 h-full">
      {/* <Hero />
       */}
      <Exchange />

   </div>
  );
}
