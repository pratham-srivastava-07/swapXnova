"use client";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Scrollbar } from "./Scrollbar";
import React, { useEffect, useState } from "react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { toast } from "@/hooks/use-toast";
import { solanaSwap } from "@/lib/swap";
import { ArrowDownUp } from "lucide-react";
import { Button } from "../ui/button";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";


export default function SwapCard() {
  const [sellingToken, setSellingToken] = useState<string>("sol"); 
  const [buyingToken, setBuyingToken] = useState<string>("usdc"); 
  const [amount, setAmount] = useState<number>(0);
  // const toast = useToast();
  const [swapLoading, setSwapLoading] = useState<boolean>(false)
  const {connection} = useConnection()
  const [balance, setBalance] =  useState(0)
  const wallet = useWallet()

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
  async function getBalance() {
    if(wallet.publicKey && wallet.connected) {
      const walletBalance = await connection.getBalance(wallet.publicKey);

      setBalance(walletBalance / LAMPORTS_PER_SOL)
    }
    else {
      setBalance(0)
    }
  }

  async function handleTokenSwaps() {
    if(!buyingToken || !sellingToken || amount <=0) {
      alert("Invalid token or amount")
    }

    try {
      setSwapLoading(true)
      const slippageBps = 50;
      const response = await solanaSwap(sellingToken, buyingToken, amount, slippageBps);
      alert(`Swap successful! pls chk wallet, ${response}`)
    } catch(err) {
      alert(err)
      console.log(err)
    } finally {
        setSwapLoading(false)
    }
  }

  useEffect(() => {
    getBalance(); 
  }, [wallet.connected, wallet.publicKey]);

  return (
    <div className="flex flex-col items-center">
      <Card className="w-[400px] bg-gray-500 text-white mb-4">
        <CardHeader>
          <CardTitle>You are Selling</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <div className="flex items-center space-x-2 hover:bg-gray-500 hover:text-green-500">
            <Scrollbar onClick={handleClickSelling} selectedToken={sellingToken} onTokenSelect={handleSellingTokenChange} excludedToken={buyingToken} />
          </div>
          <p id="balance">{balance}</p>
        </CardContent>
      </Card>

      <div className="text-center p-2">
        <ArrowDownUp />
      </div>

     
      <Card className="w-[400px] bg-gray-500 text-white hover:bg-gray-500 ">
        <CardHeader>
          <CardTitle className="hover:text-green-500 hover:cursor-pointer">You are Buying</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <div className="flex items-center space-x-2 hover:text-green-500">
            
            <Scrollbar onClick={handleClickBuying} selectedToken={buyingToken} onTokenSelect={handleBuyingTokenChange} excludedToken={sellingToken} />
          </div>
          <input
            type="number"
            value={amount} // Bind the input to the state
            onChange={(e) => setAmount(Number(e.target.value))} // Update state when the user types
            placeholder="0.00"
            className="bg-transparent text-right w-[100px] outline-none"
          />
        </CardContent>
        <CardFooter>
        <Button variant={"outline"} onClick={handleTokenSwaps} className="hover:border-green-500">{swapLoading ? "Swapping..." : "Swap now"}</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
