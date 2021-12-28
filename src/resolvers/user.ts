

export const userResolver = {
  Query: {
    users: () => [
      {
        name: "Diego Braga",
        active: true,
        email: "diebrggg@gmail.com"
      },
      {
        name: "Jair Amaral",
        active: true,
        email: "jairttoo@gmail.com"
      }
    ]
  }
}