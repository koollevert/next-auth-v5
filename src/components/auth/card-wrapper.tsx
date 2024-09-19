"use client";

import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { BackButton } from "./back-button";
import { Header } from "./header";
import { Social } from "./social";
interface CardWrapperProps{
    children: React.ReactNode;
    headerLabel: string;
    backButtonlabel: string;
    backButtonHref: string;
    showScoial?: boolean;
}
export function CardWrapper({children, headerLabel, backButtonlabel, backButtonHref, showScoial}: CardWrapperProps){
    return(
        <Card className="w-[400px] shadow-md">
            <CardHeader>
                <Header label={headerLabel}/>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            <CardFooter>
                <Social />
            </CardFooter>
            <CardFooter>
                <BackButton
                    label={backButtonlabel}
                    href={backButtonHref}
                />
            </CardFooter>
        </Card>
    )
}