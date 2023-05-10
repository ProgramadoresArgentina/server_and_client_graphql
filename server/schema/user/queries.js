import { gql } from "graphql-tag";

const queries = gql`
  type Query {
    getAllUsers: [User!]!
  }
`;

export default queries;
