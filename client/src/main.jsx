import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:8002/",
  cache: new InMemoryCache(),
});

export const GET_ALL_USERS = gql`
  query GetAllUsers {
    getAllUsers {
      id
      email
      firstName
      gender
      lastName
    }
  }
`;

export const REGISTER_USER = gql`
  mutation RegisterUser($input: UserRegisterInput) {
    registerUser(input: $input) {
      id
      email
      firstName
      gender
      lastName
      password
    }
  }
`;

export const LOGIN_USER = gql`
  mutation LoginUser($input: UserLoginInput) {
    loginUser(input: $input) {
      id
      email
      firstName
      gender
      lastName
      password
    }
  }
`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>
);
