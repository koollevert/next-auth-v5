import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

 const font = Poppins({
    subsets: ["latin"],
    weight: ["600"],
 })

 interface HearderProps{
    label: string;
 }

 export function Header({label}: HearderProps){
    return(
        <div className="w-full flex felx-col gap-y-4 items-center justify-center">
            <h1 className={cn("text-3xl font-semibold", font.className)}>
                🔐
            </h1>
            <p className="text-muted-foreground text-sm">
                {label}
            </p>

        </div>

    )
 }