import { userServices } from "./services.js";

const resolvers = {
  Mutation: {
    registerUser: async (_parent, { input }) => {
      const user = await userServices.createUser(input);
      return user;
    },
  },
  Query: {
    getAllUsers: async () => {
      const users = await userServices.getUsers();

      return users;
    },
  },
};

export default resolvers;
