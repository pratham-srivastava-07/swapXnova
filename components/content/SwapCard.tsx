"use client";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Scrollbar } from "./Scrollbar";
import React, { useState } from "react";

import { toast } from "@/hooks/use-toast";
import { solanaSwap } from "@/lib/swap";
import { ArrowDownUp } from "lucide-react";
import { Button } from "../ui/button";


export default function SwapCard() {
  const [sellingToken, setSellingToken] = useState<string>("sol"); 
  const [buyingToken, setBuyingToken] = useState<string>("usdc"); 
  const [amount, setAmount] = useState<number>(0);
  // const toast = useToast();
  const [swapLoading, setSwapLoading] = useState<boolean>(false)
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

  function handleClickBuying() {
    toast({
      title: `Added ${buyingToken}`,
      description: `Selected ${buyingToken}`,
    });
    return;
  }

  function handleClickSelling() {
    toast({
        title: `Added ${sellingToken}`,
        description: `Selected ${sellingToken}`
    })
    return
  }


  async function handleTokenSwaps() {
    if(!buyingToken || !sellingToken || amount <=0) {
      alert("Invalid token or amount")
    }

    try {
      setSwapLoading(true)
      const slippage = 50;
      const response = await solanaSwap(sellingToken, buyingToken, amount, slippage);
      alert(`Swap successful! pls chk wallet, ${response}`)
    } catch(err) {
      alert("Couldn't swap tokens")
    } finally {
        setSwapLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center">
      <Card className="w-[400px] bg-gray-500 text-white mb-4">
        <CardHeader>
          <CardTitle>You're Selling</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <div className="flex items-center space-x-2 hover:bg-gray-500 hover:text-green-500">
            <Scrollbar onClick={handleClickSelling} selectedToken={sellingToken} onTokenSelect={handleSellingTokenChange} excludedToken={buyingToken} />
          </div>
          <input
            type="number"
            placeholder="0.00"
            className="bg-transparent text-right w-[100px] outline-none"
          />
        </CardContent>
      </Card>

      <div className="text-center p-2">
        {/* <img src="/arrows.png" alt="sswapImg" className="w-10 h-10 border text-white hover:border-green-500 border-black rounded-full p-2" /> */}
        <ArrowDownUp />
      </div>

     
      <Card className="w-[400px] bg-gray-500 text-white hover:bg-gray-500 hover:text-green-500">
        <CardHeader>
          <CardTitle>You're Buying</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <div className="flex items-center space-x-2 ">
            
            <Scrollbar onClick={handleClickBuying} selectedToken={buyingToken} onTokenSelect={handleBuyingTokenChange} excludedToken={sellingToken} />
          </div>
          <input
            type="number"
            placeholder="0.00"
            className="bg-transparent text-right w-[100px] outline-none"
          />
        </CardContent>
        <CardFooter>
        <Button variant={"outline"} onClick={handleTokenSwaps}>Swap now</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
