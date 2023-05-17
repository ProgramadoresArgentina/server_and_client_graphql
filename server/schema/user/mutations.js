import { gql } from "graphql-tag";

const mutations = gql`
  extend type Mutation {
    registerUser(input: UserRegisterInput): User!
    loginUser(input: UserLoginInput): User!
  }
`;

export default mutations;
