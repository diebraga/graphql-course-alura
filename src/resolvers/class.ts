import { prisma } from "../lib/prisma";

export const classResolver = {
  Query: {
    classes: (parent: any, args: any, context: any) =>  prisma.class.findMany({
      include: {
        teacher: true
      }
    })
  },

}