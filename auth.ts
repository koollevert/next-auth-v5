import NextAuth, { DefaultSession } from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter";

import { db } from "@/lib/db";
import authConfig from "./auth.config";
import { getUserByID } from "./data/user";
import { UserRole } from "@prisma/client";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  callbacks:{
    // async signIn({user}){
    //   const existingUser= await getUserByID(user.id);
    //   if(!existingUser || !existingUser.emailVerified){
    //     return false;
    //   }
    //   return true;
    // },
    async session({token, session}){
      if(token.sub && session.user){
        session.user.id=token.sub;
      }
      if(token.role && session.user){
        session.user.role=token.role as UserRole;
      }
      return session;
    },

    async jwt({token}){
      if(!token.sub) return token;
      const existingUser= await getUserByID(token.sub);
      if(!existingUser) return token;
      return token;
    }
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});