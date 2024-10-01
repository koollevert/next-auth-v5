"use client";
import { UserInfo } from "@/components/user-info";
import { useCurrentUser } from "../../../../hooks/use-current-user";


export default async function ClientPage() {
    const user = await useCurrentUser();
    return (
        <UserInfo
            label="Client component"
            user={user}
        />
        
    )
}
