"use client";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Scrollbar } from "./Scrollbar";
import React, { useState } from "react";

export default function SwapCard() {
  const [sellingToken, setSellingToken] = useState<string>("sol"); 
  const [buyingToken, setBuyingToken] = useState<string>("usdc"); 

 
  const handleSellingTokenChange = (token: string) => {
    setSellingToken(token);
    if (token === buyingToken) {
      setBuyingToken(""); 
    }
  };

  
  const handleBuyingTokenChange = (token: string) => {
    setBuyingToken(token);
    if (token === sellingToken) {
      setSellingToken(""); 
    }
  };

  return (
    <div className="flex flex-col items-center">
      <Card className="w-[400px] bg-gray-500 text-white mb-4">
        <CardHeader>
          <CardTitle>You're Selling</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <div className="flex items-center space-x-2 hover:bg-blue-900 hover:text-blue-500">
            <Scrollbar selectedToken={sellingToken} onTokenSelect={handleSellingTokenChange} excludedToken={buyingToken} />
          </div>
          <input
            type="number"
            placeholder="0.00"
            className="bg-transparent text-right w-[100px] outline-none"
          />
        </CardContent>
      </Card>

      <div className="text-center p-2">
        <img src="/arrow.webp" alt="sswapImg" className="w-10 h-10 border border-black rounded-full p-2" />
      </div>

     
      <Card className="w-[400px] bg-gray-500 text-white">
        <CardHeader>
          <CardTitle>You're Buying</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <div className="flex items-center space-x-2 hover:bg-blue-900 hover:text-blue-500">
            
            <Scrollbar selectedToken={buyingToken} onTokenSelect={handleBuyingTokenChange} excludedToken={sellingToken} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
