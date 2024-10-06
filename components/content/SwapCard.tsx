"use client"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Scrollbar } from "./Scrollbar";

export default function SwapCard() {
  const [sellingToken, setSellingToken] = useState("POPCAT");
  const [buyingToken, setBuyingToken] = useState("SOL");

  return (
    <div className="flex flex-col items-center">
      {/* Selling Card */}
      <Card className="w-[400px] bg-gray-500 text-white mb-4">
        <CardHeader>
          <CardTitle>You're Selling</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {/* <img
              src="popcat-image-url" // Replace with actual image URL
              alt="POPCAT"
              className="w-8 h-8 rounded-full"
            />
            <span>{sellingToken}</span> */}
            <Scrollbar/>
          </div>
          <input
            type="number"
            placeholder="0.00"
            className="bg-transparent text-right w-[100px] outline-none"
          />
        </CardContent>
      </Card>

      {/* Swap Icon/Button */}
      <div className="text-center p-2">
        <button
          className="bg-gray-600 p-2 rounded-full"
          onClick={() => {
            // Swap logic for tokens
            const temp = sellingToken;
            setSellingToken(buyingToken);
            setBuyingToken(temp);
          }}
        >
          <img src="swap-icon-url" alt="Swap Icon" className="w-6 h-6" /> {/* Replace with swap icon */}
        </button>
      </div>

      {/* Buying Card */}
      <Card className="w-[400px] bg-gray-500 text-white">
        <CardHeader>
          <CardTitle>You're Buying</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Scrollbar />
          </div>
          <input
            type="number"
            placeholder="0.00"
            className="bg-transparent text-right w-[100px] outline-none"
          />
        </CardContent>
      </Card>
    </div>
  );
}
