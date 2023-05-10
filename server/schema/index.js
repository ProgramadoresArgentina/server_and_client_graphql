import { gql } from "graphql-tag";
import user from "./user/index.js";

const { userResolvers, userTypeDefs } = user;

const typeDefs = gql`
  # POST, PUT, DELETE
  type Mutation {
    _empty: String
  }

  #GET
  type Query {
    _empty: String
  }
`;

export default {
  resolvers: [userResolvers],
  typeDefs: [userTypeDefs, typeDefs],
};
