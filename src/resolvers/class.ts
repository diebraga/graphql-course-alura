import { prisma } from "../lib/prisma";

export const classResolver = {
  Query: {
    classes: (parent: any, args: any, context: any) =>  prisma.class.findMany({
      include: {
        teacher: true
      }
    }),
    class: (parent: any, args: any, context: any) => prisma.class.findFirst({
      where: {
        id: Number(args.id)
      }
    })
  },

  Mutation: {
    createClass: (parent: any, args: any, context: any) => prisma.class.create({
      data: {
        description: args.description,
        vacancies: args.vacancies,
        startsAt: args.startsAt,
        teacher: {
          connect: {
            id: Number(args.teacher)
          }
        },
      },
      include: {
        _count: true,
        teacher: true
      }
    }),
    updateClass: (parent: any, args: any, context: any) => prisma.class.update({
      where: {
        id: Number(args.id)
      },
      data: {
        description: args.description,
        vacancies: args.vacancies,
        startsAt: args.startsAt,
        teacher: {
          connect: {
            id: Number(args.teacher)
          }
        },
      },
      include: {
        teacher: true
      }
    }),
    deleteClass: (parent: any, { id }: any, context: any) => prisma.class.delete({
      where: {
        id: Number(id)
      }
    })
  }
}