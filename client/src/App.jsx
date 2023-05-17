import { useQuery, useMutation } from "@apollo/client";
import "./App.css";
import { GET_ALL_USERS, REGISTER_USER, LOGIN_USER } from "./main";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const { loading, error } = useQuery(GET_ALL_USERS, {
    onCompleted: ({ getAllUsers }) => {
      setUsers(getAllUsers);
    },
  });
  const [
    registerUser,
    { data: registerData, loading: registerLoading, error: registerError },
  ] = useMutation(REGISTER_USER);

  const [
    loginUser,
    { data: loginData, loading: loginLoading, error: loginError },
  ] = useMutation(LOGIN_USER, {
    onCompleted: ({ loginUser }) => {
      setUsers([...users, loginUser]);
    },
    onError: ({ message }) => {
      console.log({ message });
    },
  });

  if (error || registerError || loginError) {
    return (
      <div
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h1>{loginError && loginError.message}</h1>:
        <h1>{error && error.message}</h1>
      </div>
    );
  }

  if (loading || registerLoading || loginLoading) {
    return (
      <div
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h1>CARGANDO LOS DATOS...</h1>
      </div>
    );
  }

  console.log({ registerLoading });
  console.log({ registerData });
  console.log("======================================");
  console.log({ loginLoading });
  console.log({ loginError });
  console.log({ loginData });

  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <button
        onClick={() =>
          registerUser({
            variables: {
              input: {
                email: "errrooror@ppp.com",
                firstName: "pablo",
                gender: "famle",
                lastName: "heredia",
                password: "123456789",
              },
            },
          })
        }
      >
        REGISTRO
      </button>
      <button
        onClick={() =>
          loginUser({
            variables: {
              input: {
                email: "errrooror@ppp.com",
                password: "123456789",
              },
            },
          })
        }
      >
        login
      </button>
      {currentUser &&
        users.map(({ email, firstName, gender, id, lastName }) => (
          <div
            key={id}
            style={{
              border: "1px solid #2a2a2a",
              borderRadius: "4px",
              height: "150px",
              margin: "10px 20px",
              minWidth: "600px",
              padding: "20px",
            }}
          >
            <h4>
              Hola me llamo {firstName} {lastName}
            </h4>
            <p>Sexo: {gender ?? ""}</p>
            <p>Email: {email ?? ""}</p>
          </div>
        ))}
    </div>
  );
}

export default App;
