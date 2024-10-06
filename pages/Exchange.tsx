import AdapterButton from "@/components/content/AdapterButton";
import SwapCard from "@/components/content/SwapCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

  
export default function Exchange() {
    return <div>
        <div className="">
            <AdapterButton />
        </div>
        <div className="flex justify-center pt-10">
            <div className="flex items-center max-w-6xl">
                <div className="flex justify-center">
                  <Tabs defaultValue="account " className="w-[400px] ">
                    <div className="flex items-center justify-center">
                      <TabsList className="border rounded-full px-6 py-2 aria-selected:bg-slate-500 aria-selected:text-green-500">
                        <TabsTrigger value="account">Swap</TabsTrigger>
                        <TabsTrigger value="limit">Limit</TabsTrigger>
                        <TabsTrigger value="DCA">DCA</TabsTrigger>
                        <TabsTrigger value="VA">VA</TabsTrigger>
                      </TabsList>
                    </div>
                    <div className="flex justify-center items-center pt-5">
                      <TabsContent value="account"><SwapCard /></TabsContent>
                      <TabsContent value="limit">Limit Chart</TabsContent>
                      <TabsContent value="DCA">DCA content</TabsContent>
                      <TabsContent value="VA"> Va Content</TabsContent>
                    </div>
                  </Tabs>
                </div>
            </div>
        </div>
    </div>
}