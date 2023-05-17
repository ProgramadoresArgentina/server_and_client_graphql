import { gql } from "graphql-tag";

const models = gql`
  type User {
    id: ID!
    email: String!
    firstName: String!
    gender: String!
    lastName: String!
    password: String!
  }
`;

export default models;
