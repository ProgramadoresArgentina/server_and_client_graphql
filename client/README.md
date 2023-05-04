### `Client`.

<br>

### Seguiremos un poco la documentación oficial de [[Vite.js]](https://vitejs.dev/guide/), así que comenzaremos abriendo una terminal ubicados en la carpeta Client corriendo el siguiente comando para crear un proyecto con Vite.

<br>

```
  npm create vite .
```

```
  yarn create vite .
```

```
  pnpm create vite .
```

### Esto nos dara a elegir de que manera arrancaremos el proyecto, en este ejemplo eligiremos `React.`

![select_vite](./assets/vite_select.png)

### Es creara el proyecto con todo lo que necesitamos para correr un proyecto echo con react + vite. Ahora deberemos instalar las dependencias necesarias para poder correr el proyecto con uno de los siguientes comandos:

<br>

```
  npm install
```

```
  yarn
```

```
  pnpm install
```

<br>

### Una vez terminada la instalación de dependencias, para correr el proyecto ejecutaremos el siguiente comando:

<br>

```
  npm run dev
```

```
  yarn dev
```

```
  pnpm run dev
```

### Una vez ejecutado el comando nos dirigiremos a [http://localhost:5173](http://localhost:5173/) y deberia mostrarnos en el navegador la siguiente ventana

![vite_react](./assets/vite_react.png)

<br>

# Integración de Apollo-Client con GraphQL

<br>

### Ahora procederemos a frenar nuestra aplicación por el momento, en la terminal puedes presionar `Ctrl + C` y finalizara el proceso de la aplicación. Una vez realizado este paso, pasaremos a instalar las dependencias necesarias para integrar `Apollo-Client con GraphQL` a nuestra aplicación de `React.`

<br>

### Ejecutaremos el siguiente codigo:

<br>

```
 npm install @apollo/client graphql
```

```
 yarn add @apollo/client graphql
```

```
 pnpm install @apollo/client graphql
```

### Nos dirijiremos a nuestro archivo `main.jsx` que se encuentra en la carpeta `src`, ahí es donde implementaremos nuestra configuración de `Apollo-client con GraphQL`.

### Actualmente nuestro `main.jsx` se deberia ver de esta forma:

<br>

![main.jsx](./assets/main.png)

<br>

### Ahora integraremos el `Cliente de Apollo` al proyecto, importaremos los siguientes metodos de `@apollo/client`:

```
 import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
```

### **_`ApolloClient:`_** es una instancia de cliente GraphQL creado por Apollo para conectarse a un servidor GraphQL. Permite enviar solicitudes al servidor y recibir su respuesta. Adicionalmente, proporciona una serie de funciones y utilidades para trabajar con la respuesta del servidor.

<br>

### **_`InMemoryCache:`_** InMemoryCache se utiliza comúnmente junto con el cliente ApolloClient. Es un caché en memoria que guarda los resultados de las consultas (queries) que ha realizado la aplicación. Esto permite que las respuestas ya obtenidas desde el servidor sean reutilizadas sin necesidad de volver a hacer la consulta. La utilización del caché puede mejorar la velocidad de respuesta de la aplicación y reducir la carga en el servidor, ayudando a mejorar la experiencia del usuario.

<br>

### **_`ApolloProvider:`_** ApolloProvider es un componente de React que se encarga de proveer el cliente de Apollo a toda la jerarquía de componentes que lo rodean. Es decir, permite que el cliente esté disponible a nivel global en la aplicación y pueda ser utilizado en cualquier componente. Por lo tanto, ApolloProvider es necesario para poder utilizar características como el caché o el envío de solicitudes al servidor.

<br>

### **_`gql:`_** gql es un tag function (función etiqueta) que forma parte del paquete graphql-tag. Sirve para crear cadenas de consulta para GraphQL usando la sintaxis especificada por esta tecnología. Al utilizar gql, podemos escribir nuestras consultas como cadenas de texto en formato GraphQL en lugar de tener que definirlas mediante un objeto. Además, gql nos da verificación en tiempo de compilación de nuestras consultas, lo que ayuda a evitar errores. Es muy útil trabajar con gql para mantener nuestras consultas organizadas y legibles.

<br>

### Procederemos a crear una instacia del objeto `ApolloClient en JavaScript` utilizando las bibliotecas y clases proporcionadas por `Apollo` con el siguiente codigo:

<br>

```
  const client = new ApolloClient({
    uri: 'http://localhost:8000/',
    cache: new InMemoryCache(),
  });
```

### _`NOTA: La instancia creada a través de esta función se utiliza principalmente para enviar consultas GraphQL a un servidor remoto alojado en la dirección especificada en la propiedad` ***"uri".*** `Además, también se crea una instancia del objeto` ***InMemoryCache*** `ella misma pasa como argumento en la propiedad cache. La creación de una caché en memoria permite a ApolloClient almacenar localmente cualquier dato que se haya recuperado del servidor, lo que puede mejorar significativamente el rendimiento.`_

<br>

### El codigo deberia quedar así por el momento:

<br>

![main_client](./assets/main_client.png)

<br>

### continuaremos por crear nuestra query para consultar los usuarios de nuestro backend. En nuestro archivo `main.jsx` pegar el siguiente codigo:

<br>

```
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
```

<br>

### Acto siguiente envolveremos nuestra aplicación de `React` con el `ApolloProvider` que nos brindo `@apollo/client` y le pasarermos el cliente que definimos anteriormente:

<br>

```
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </React.StrictMode>
  );
```

<br>

### Nuestro `main.jsx` deberia haber quedado de la siguiente manera:

<br>

![main_completed](./assets/main_completo.png)

<br>

# Ejecutando nuestra Query en Apollo Client

### Nos dirigiremos a nuestro archivo `App.jsx` y ahí es donde ejecutaremos todo nuestro codigo. Lo primero que debemos hacer es quitar todo lo que esta dentro del return de `App` y pegar el siguiente codigo:

<br>

```
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

```

### Importaremos desde `@apollo/client` el hook `useQuery` de la siguiente manera y también traeremos desde `main` el schema que definimos de nuestra `Query`:

<br>

```
  import { useQuery } from "@apollo/client";
  import { GET_ALL_USERS } from "./main";
```

<br>

### Una vez realizado esto, debemos tener en cuenta que nuestro servidor debe estar creado, y funcionando para poder ejecutar nuestra Query. Una vez verificando que nuestro servidor esta run en el puerto 8000, procederemos a correr en otra `Terminal` el siguiente comando:

<br>

```
 npm run dev
```

```
 yarn dev
```

```
 pnpm run dev
```

<br>

### Ahora nos dirigiremos a la url que nos muestra en nuestra terminal, que por defecto la que corre `vite` es `http://127.0.0.1:5173`. Si todo funciono correctamente en nuestro browser, deberiamos tener el siguiente resultado:

<br>

![list_user](./assets/list_users.png)

<br>

## Si llegaste hasta aqui, y te devolvio la lista de usuarios que figura en la anterior imagen. Quiero felicitarte, por que acabas de crear un servidor de `Apollo-Server con GraphQL` y conectarlo con una aplicación de `React con Apollo Client con GraphQL`.

## Ahora continua con el [README.md](https://github.com/neriheredia/APOLLO_SERVER_AND_CLIENT_GRAPHQL/blob/master/README.md) principal, y sigue aprendiendo nuevas cosas. Exitos!

## Autor

### Este proyecto fue desarrollado por [Neri Heredia](https://github.com/neriheredia).
