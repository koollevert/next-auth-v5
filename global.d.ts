import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

// This is necessary to make sure the file is treated as a module
export {};
