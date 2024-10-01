"use client";

import { UserRole } from "@prisma/client";
import { UseCurrentRole } from "../../../hooks/use-current-role";
import { FormError } from "../form-error";

interface RoleGateProps{
    children: React.ReactNode;
    allowedRole: UserRole;
}


export function RoleGate({children, allowedRole}: RoleGateProps) {
    const role = UseCurrentRole();
    if(role !==allowedRole){
        return (
            <FormError message="You do not have Permision to view this content!"/>
        )
    }
    return (
        <>
            {children}
        </>
    )
}
