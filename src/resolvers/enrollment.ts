import { prisma } from "../lib/prisma";

export const enrollmentResolver = {
  Query: {
    enrollments: (parent: any, args: any, context: any) =>  prisma.enrollment.findMany({
      include: {
        classes: true,
        student: true,
        _count: true
      }
    }),
    enrollment: (root: any, args: any) => prisma.enrollment.findFirst({
      where: {
        id: Number(args.id)
      },
      include: {
        classes: true,
        student: true
      }
    }),
  },

}