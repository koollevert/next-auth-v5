import { db } from "@/lib/db";

export async function getUserByEmail(email: string){
    try {
        const user = await db.user.findUnique({where: {email}});
        return user;
        
    } catch (err) {
        return null;
        
    }
}

export async function getUserByID(id: string){
    try {
        const user = await db.user.findUnique({where: {id}});
        return user;
        
    } catch (err) {
        return null;
        
    }
}