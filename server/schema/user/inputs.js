import { gql } from "graphql-tag";

export const userRegisterInput = gql`
  input UserRegisterInput {
    email: String!
    firstName: String!
    gender: String!
    lastName: String!
  }
`;
