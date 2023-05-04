import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { gql } from "graphql-tag";

const UsersMock = [
  {
    id: 1,
    firstName: "Emiline",
    lastName: "McClune",
    email: "emcclune@xrea.com",
    gender: "female",
  },
  {
    id: 2,
    firstName: "Felix",
    lastName: "Ingleston",
    email: "fingleston1@hibu.com",
    gender: "female",
  },
  {
    id: 3,
    firstName: "Travus",
    lastName: "Bergstram",
    email: "tbergstram2@pbs.org",
    gender: "female",
  },
  {
    id: 4,
    firstName: "Holly-anne",
    lastName: "Knighton",
    email: "hknighton3@booking.com",
    gender: "female",
  },
];

const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    firstName: String!
    gender: String!
    lastName: String!
  }

  # POST, PUT, DELETE
  type Mutation {
    _empty: String
  }

  # GET
  type Query {
    getAllUsers: [User!]!
  }
`;

const resolvers = {
  Query: {
    getAllUsers: () => {
      return UsersMock;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 8000 },
});

console.log(`🚀  Server ready at: ${url}`);
