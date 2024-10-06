"use client"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Scrollbar } from "./Scrollbar";

export default function SwapCard() {

  return (
    <div className="flex flex-col items-center">
      <Card className="w-[400px] bg-gray-500 text-white mb-4">
        <CardHeader>
          <CardTitle>You're Selling</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Scrollbar/>
          </div>
          <input
            type="number"
            placeholder="0.00"
            className="bg-transparent text-right w-[100px] outline-none"
          />
        </CardContent>
      </Card>

      <div className="text-center p-2">
        <img src="/arrow.webp" alt="sswapImg" className="w-16 h-16 rounded-full p-2" />
      </div>

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
