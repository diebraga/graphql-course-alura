import { GraphQLScalarType } from "graphql";
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
  },

  Mutation: {
    createUser: async (root: any, user: any) => await prisma.user.create({
      include: {
        role: true
      },
      data: {
        email: user.email,
        name: user.name,
        active: user.active,
        role: {
          connect: {
            id: Number(user.roleId)
          },
        },
      }
    }),
    updateUser: async (root: any, user: any) => await prisma.user.update({
      where: {
        id: Number(user.id)
      },
      include: {
        role: true
      },
      data: {
        email: user.email,
        name: user.name,
        active: user.active,
        role: {
          connect: {
            id: Number(user.roleId)
          },
        },
      }
    }),
    deleteUser: async (root: any, user: any) => await prisma.user.delete({
      where: {
        id: Number(user.id)
      },
      include: {
        role: true
      }
    })
  }
}