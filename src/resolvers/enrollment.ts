import { prisma } from "../lib/prisma";

export const enrollmentResolver = {
  Query: {
    enrollments: (parent: any, args: any, context: any) =>  prisma.enrollment.findMany({
      include: {
        class: true,
        student: true
      }
    }),
    enrollment: (parent: any, args: any, context: any) => prisma.enrollment.findFirst({
      where: {
        id: Number(args.id)
      },
      include: {
        class: true,
        student: true
      }
    })
  },

}