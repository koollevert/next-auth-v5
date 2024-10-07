// import {PrismaClient} from "@prisma/client";

// declare global {
//     var prisma: PrismaClient | undefined;
// }
// export const db = globalThis.prisma || new PrismaClient();
// if(process.env.NODE_ENV !== "production") globalThis.prisma=db;




import { PrismaClient } from "@prisma/client";

// Use globalThis as before
export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}
