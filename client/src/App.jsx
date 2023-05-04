import { useQuery } from "@apollo/client";
import "./App.css";
import { GET_ALL_USERS } from "./main";

function App() {
  const { data, loading, error } = useQuery(GET_ALL_USERS);

  if (error) {
    return (
      <div
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h1>{error.message}</h1>
      </div>
    );
  }

  if (loading) {
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

  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {data &&
        data.getAllUsers.map(({ email, firstName, gender, id, lastName }) => (
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
