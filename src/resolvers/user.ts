import { prisma } from "../lib/prisma";

export const userResolver = {
  Query: {
    users: (root) => prisma.user.findMany(),
    user: (root, args) => prisma.user.findFirst({
      where: {
        id: Number(args.id)
      }
    })
  }
}