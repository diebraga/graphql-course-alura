import { prisma } from "../lib/prisma";

export const userResolver = {
  Query: {
    users: (root: any) => prisma.user.findMany({
      include: {
        role: true,
      }
    }),
    user: (root: any, args: any) => prisma.user.findFirst({
      where: {
        id: Number(args.id)
      },
      include: {
        role: true,
      }
    }),
    
    roles: (root: any, args: any) => prisma.role.findMany({
      include: {
        users: true,
        _count: true,
      }
    }),
    role: (root: any, args: any) => prisma.role.findFirst({
      where: {
        id: Number(args.id)
      },
      include: {
        users: true
      }
    })
  }
}