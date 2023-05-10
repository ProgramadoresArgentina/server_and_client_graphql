import { gql } from "graphql-tag";

const mutations = gql`
  extend type Mutation {
    registerUser(input: UserRegisterInput): User!
  }
`;

export default mutations;
