import AdapterButton from "@/components/content/AdapterButton";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
export default function Exchange() {
    return <div>
        <div className="">
            <AdapterButton />
        </div>
        <div className="flex justify-center pt-10">
            <div className="flex items-center max-w-6xl">
            <div className="card">
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
        </div>
            </div>
        </div>
    </div>
}