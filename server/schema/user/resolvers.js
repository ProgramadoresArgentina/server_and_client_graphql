import { GraphQLError } from "graphql";
import { userServices } from "./services.js";
import { decryptPassowrd } from "../../utilities/encrypt.js";

const resolvers = {
  Mutation: {
    loginUser: async (_parent, { input }) => {
      const { email, password } = input;

      const user = await userServices.getUserByEmail(email);

      if (!user) {
        throw new GraphQLError("Email not found");
      }

      const passwordDecrypting = decryptPassowrd(user.password);

      if (passwordDecrypting !== password) {
        throw new GraphQLError("Invalid credentials");
      }

      return user;
    },
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
