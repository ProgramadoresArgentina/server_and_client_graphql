import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
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

const RootComponent = () => {
  const { data, loading, error } = useQuery(GET_ALL_USERS);

  if (error) {
    return (
      <View>
        <Text>{error.message}</Text>
      </View>
    );
  }

  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <Text>Lista de usuarios</Text>
        {!loading && data ? (
          data.getAllUsers?.map(({ id, firstName }) => (
            <View key={id}>
              <Text>{firstName}</Text>
            </View>
          ))
        ) : (
          <View>
            <ActivityIndicator size="large" color="#3415e2" />
          </View>
        )}
      </View>
    </ApolloProvider>
  );
};

export default function App() {
  return (
    <ApolloProvider client={client}>
      <RootComponent />
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
