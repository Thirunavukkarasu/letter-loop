import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

declare global {
    var prisma: any;
}

if (process.env.NODE_ENV === "production") {
    prisma = new PrismaClient();
} else {
    if (!global.prisma) {
        global.prisma = new PrismaClient();
    }
    prisma = global.prisma;
}

let prismadb = prisma;
export default prismadb;