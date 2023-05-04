### `Servidor`.

<br>

### Ingresamos dentro de la carpte `server`, una vez dentro de la misma. Comprobaremos que tengamos instalado **_`'Node.js y npm'`_**, con los siguientes comandos.

`node --version`

<br>

`npm --version`

### Si en nuestra terminal no nos devuelve una version de los paquetes. Procederemos a hacer la instalación de **_`Node.js`_**, siguiendo la documentación oficial de la pagina de **_Node.js_**.

</br>

[[Documentación Node.JS]](https://nodejs.org/en)

### Volveremos a verificar que ya tengamos la versión instalada de **_`'Node.js y npm'`_** con los anteriores comandos:

<br>
`node --version`
<br>
`npm --version`

### Nota

`Yo en mi caso utilizare otro gestor de paquetes pnpm y no npm, pero si quieren utilizar npm, dejare los comando para que lo hagan con ese gestor.`

### Procederemos a instalar el gestor que nos guste mas, puede ser tanto yarn como pnpm, yo en mi caso utilizare pnpm ya que para mi es mas rapido.

## Comando para instalar pnpm:

```
  npm install -g pnpm
```

## Comnado para instalar yarn:

```
  npm install -g yarn
```

`Para verificar su correcta instalación, podemos ejecutar el siguiente comando segun el gestor de paquetes que eligio.`

### pnpm:

```
  pnpm --version
```

### yarn:

```
  yarn --version
```

</br>
<h1><b>Inicializar un proyecto de Node.js</b></h1>
</br>

### Con el siguiente comando, inicializaremos un proyecto con **_Node.js_**

```
  npm init -y && npm pkg set type="module"
```

<hr>

**_`Nota: El comando "npm init -y" se utiliza para crear un archivo package.json en un proyecto de Node.js de manera rápida y sencilla, sin tener que responder a preguntas de configuración. La opción "-y" indica que se deben aceptar automáticamente todas las opciones predeterminadas. En resumen, este comando agiliza el proceso de inicialización de un proyecto y facilita la gestión de dependencias y configuraciones.`<br>`El comando "npm pkg set type='module'" se utiliza para establecer el tipo de módulo en un paquete de Node.js. Al establecer el tipo de módulo en "module", se indica que el paquete está diseñado para trabajar con el sistema de módulos de ECMAScript (ESM) en lugar del sistema de módulos CommonJS. Esto permite que el paquete se pueda importar y utilizar en proyectos que también utilizan ESM.`_**

<hr>
</br>

### Una vez inicializado el proyecto de **_`Node.js`_** procederemos a **_'instalar'_** las principales dependencias para poder crear el servidor.

### npm:

```
  npm install @apollo/server graphql graphql-tag
```

### yarn:

```
  yarn add @apollo/server graphql graphql-tag
```

### pnpm:

```
  pnpm install @apollo/server graphql graphql-tag
```

### Una vez instaladas las dependencias, nuestro **_package.json_** deberia verse de la siguiente manera

<br>

![package.json](./assets/package_img.png)

<br>

# **_GraphQL_**

### `Cada servidor` **_`GraphQL`_** `(incluyendo Apollo Server) utiliza un esquema para definir la estructura de los datos que los clientes pueden consultar. En este ejemplo, crearemos un` **_`servidor`_** `para consultar una` **_`lista de usuarios`_** `hacer un` **_`registro`_** `y hacer un` **_`login.`_**

<br>

### Comenzaremos creando un **_index.js_** en la raiz de nuestro proyecto, que sera el centro de nuestra aplicación.

### Sus carpetas deberian quedar de la siguiente manera:

```
  graphql
    |
    -- client
    |
    -- server
        |
        -- node_modules
        |
        -- index.js
        |
        -- package.json
        |
        -- pnpm-lock.yaml
```

### Dentro del **_index.js_** comenzaremos importando desde **_'@apollo/server'_** nuestro **_'ApolloServer'_**.

```
  import { ApolloServer } from '@apollo/server';
```

### También importaremos desde **_'@apollo/server/standalone'_** el **_'startStandaloneServer'_**.

```
  import { startStandaloneServer } from '@apollo/server/standalone';
```

**_`Nota:`_** `El` **_`startStandaloneServer`_** `de Apollo Server Standalone es una herramienta útil para crear rápidamente un` **_`servidor GraphQL`_** `independiente y de fácil` **_`configuración.`_**

<br>

# **_Type Definitions - GraphQL_**

### Las **_Type Definitions_** (Definiciones de Tipo) en **_GraphQL_** son una forma de definir los tipos de datos que pueden ser consultados o mutados en un **_'esquema' GraphQL_**. Las **_Type Definitions_** permiten a los desarrolladores describir de forma clara y precisa los tipos de datos disponibles en una **_API GraphQL_**, lo que facilita la comprensión y el uso de la misma.

### En **_GraphQL_** existen varios tipos de datos predefinidos que pueden ser utilizados en una **_Type Definition_** para definir los tipos de datos que se pueden consultar o mutar en una **_API GraphQL_**. Estos tipos de datos predefinidos incluyen:

- **_Scalar Types:_** son tipos de datos que representan valores individuales, como **_String_**, **_Int_**, **_Float_**, **_Boolean_** y **_ID._**
- **_Object Types:_** son tipos de datos que representan un objeto con un conjunto de campos y valores asociados. Estos objetos pueden tener campos que son de tipo **_Scalar_** o de otro **_Object Type._**
- **_Interface Types:_** son tipos de datos que definen un conjunto de campos que otros **_Object Types_** pueden implementar. Esto permite que varios **_Object Types_** compartan campos en común, lo que facilita la definición de un esquema **_GraphQL._**
- **_Union Types:_** son tipos de datos que permiten que un campo en una consulta pueda devolver uno de varios **_Object Types_** posibles. Esto es útil cuando se tiene un campo que puede ser de diferentes tipos, pero no se sabe de antemano cuál será el tipo concreto que se devolverá.
- **_Enum Types:_** son tipos de datos que representan un conjunto de valores predefinidos. Por ejemplo, un **_Enum Type_** podría representar los posibles **_estados_** de un pedido: **_"Pendiente", "En Proceso", "Completado", etc._**
- **_Input Object Types:_** son tipos de datos que representan un conjunto de campos que se utilizan como argumentos en las mutaciones. Estos campos pueden ser de tipo **_Scalar_** o de otro **_Input Object Type._**

## `Estos son los tipos de datos predefinidos en` **_`GraphQL`_** `que se pueden utilizar en una` **_`Type Definition`_** `para definir los tipos de datos que se pueden consultar o mutar en una` **_`API GraphQL.`_**

### Las **_Type Definitions_** pueden incluir información sobre los campos que forman parte de cada tipo de dato, sus argumentos, y las relaciones entre ellos. Por ejemplo, una **_Type Definition_** para un tipo de dato **_"Usuario"_** podría incluir información sobre los campos **_"nombre", "email", y "edad",_** así como también sobre los argumentos necesarios para realizar **_consultas o mutaciones_** en dichos campos.

<br>

## En resumen, las **_`Type Definitions`_** son una parte fundamental de la **_`sintaxis de GraphQL`_** que permite definir los tipos de datos que pueden ser **_`consultados o mutados`_** en una **_`API`_**, lo que facilita la comprensión y el uso de la misma por parte de los desarrolladores.

<br>

# **_Creando nuestro schema de GraphQL_**

### Importamos el metodo **_`gql`_** desde **_`graphql-tag`_**

```
import { gql } from "graphql-tag";
```

### Acto siguiente creamos una constante **_'typeDefs'_** **_`(type Definitions)`_** con las siguientes definiciones.

```
  const typeDefs = gql`
    type User {
      id: ID!
      email: String!
      firstName: String!
      gender: String!
      lastName: String!
    }

    type Query {
      getAllUsers: [User!]!
    }
  `;
```

`Nota: el objeto ` **_`User,`_** `como ` **_`id, email, firstName, gender y lastName. `_** `En este caso, utilizaremos tipos de datos de GraphQL para cada campo.`<br>`Define el objeto ` **_`Query`_** `dentro del ` **_`typeDefs. `_** `Este objeto debe tener una propiedad llamada ` **_`getAllUsers`_** `que devuelve una lista de ` **_`usuarios.`_**

## Por el momento, crearemos un mock de nuestros **_usuarios_**, **_'simulando una base de datos'._** Despues extenderemos esto a una **_'conexión con una base de datos con MongoDB'._**

```
  const UsersMock = [
    {
      id: 1,
      firstName: "Emiline",
      lastName: "McClune",
      email: "emcclune@xrea.com",
      gender: "female",
    },
    {
      id: 2,
      firstName: "Felix",
      lastName: "Ingleston",
      email: "fingleston1@hibu.com",
      gender: "female",
    },
    {
      id: 3,
      firstName: "Travus",
      lastName: "Bergstram",
      email: "tbergstram2@pbs.org",
      gender: "female",
    },
    {
      id: 4,
      firstName: "Holly-anne",
      lastName: "Knighton",
      email: "hknighton3@booking.com",
      gender: "female",
    },
  ];
```

<br>

# **_Resolvers - GraphQL_**

### Un resolver de **_GraphQL_** es una **_función que se encarga de proporcionar los datos necesarios para un campo específico en una consulta GraphQL._** Es decir, cuando se hace una **_consulta GraphQL_**, cada campo que se solicita necesita un **_resolver que proporcione los datos para ese campo._**

<br>

### El resolver se define para cada tipo de objeto en el **_esquema GraphQL_** y se utiliza para recuperar los datos necesarios de **_cualquier fuente de datos_**, como una **_base de datos o una API externa._**

<br>

### Además, el resolver también se encarga de resolver **_cualquier dependencia que tenga el campo._** Por ejemplo, si un campo en la consulta depende de otro campo, el resolver del campo dependiente puede utilizar el valor devuelto por el resolver del campo de referencia para calcular el resultado del campo dependiente.

<br>

## En resumen, un **_`resolver de GraphQL`_** es una función que proporciona los datos necesarios para un campo específico en una **_`consulta GraphQL`_** y puede recuperar esos datos de cualquier fuente de datos disponible.

<br>

### Acto siguiente creamos una constante **_'resolvers'_** con las siguiente sintaxis.

```
  const resolvers = {
    Query: {
      getAllUsers: () => {
        return UsersMock;
      }
    }
  };
```

`Nota: Lo que estamos definiendo es una resultor del tipo ` **_`Query`_**, `que cuando consulten a nuestro servidor a ` **_`getAllUsers, `_** `nos devolvera un ` **_`array de usuarios. `_** `En este caso, el mock de usuarios que creamos anteriormente.`

<br>

# **_Configuración y ejecución de un servidor GraphQL con Apollo Server en Node.js_**

## Crear una instancia de ApolloServer

### El primer paso es crear una **_instancia de ApolloServer_** pasando dos argumentos: **_typeDefs y resolvers_**. typeDefs es un objeto que define el **_esquema de GraphQL_** y resolvers es un objeto que define cómo se deben **_resolver las consultas y mutaciones en el esquema._**

```
  const server = new ApolloServer({
      typeDefs,
      resolvers,
  });
```

## Crear una instancia de ApolloServer

### Después, se utiliza la función **_startStandaloneServer_** de **_Apollo Server_** para crear una **_aplicación Express_**, instalar la instancia de ApolloServer como middleware en la aplicación y preparar la aplicación para manejar solicitudes entrantes.

```
  const { url } = await startStandaloneServer(server, {
      listen: { port: 8000 },
  });
```

## Obtener la URL del servidor GraphQL

### Finalmente, se utiliza la **_destructuración_** de objetos para obtener la **_URL_** en la que se encuentra el **_servidor GraphQL_**. Esto se almacena en la **_variable url_** y se **_imprime en la consola_** con un mensaje indicando que el **_servidor está listo para recibir solicitudes._**

## En resumen, este código configura y ejecuta un **_servidor GraphQL_** utilizando **_Apollo Server en Node.js_**, lo que permite interactuar con un **\*esquema de GraphQL utilizando consultas y mutaciones.\*\***

<br>

# **_Ejecuta tu primera consulta_**

## **_Lo primero que debemos hacer, es correr nuestro servidor_**

### Para ejecutar nuestro servidor, podemos usar el comando **_`node.js`_** en nuestra terminal.

`node index.js`

**_`Nota: En el ejecutamos el comnado node, y hacemos referencia a nustro archivo donde creamos nuestro servidor. En este caso es el index.js de los pasos anteriores.`_**

### Visita http://localhost:8000 en tu navegador, lo cual abrirá el Apollo Sandbox:

<br>

![sandbox_graphql](./assets/sandbox.png)

<br>

## **_La interfaz de usuario de Apollo Sandbox incluye:_**

- ### Un panel de operaciones para escribir y ejecutar consultas (en el centro).
- ### Un panel de respuesta para ver los resultados de la consulta (a la derecha).
- ### Pestañas para la exploración del esquema, búsqueda y configuraciones (a la izquierda).
- ### Una barra de URL para conectarse a otros servidores de GraphQL (en la parte superior izquierda).
- ### Nuestro servidor admite una sola consulta llamada `"getAllUsers"`. ¡Vamos a ejecutarla!

## **_Aquí hay una cadena de consulta de GraphQL para ejecutar la consulta de `"getAllUsers"`:_**

<br>

```
  query {
    getAllUsers {
      id
      email
      firstName
      gender
      lastName
    }
  }
```

## **_`Copiar codigo y pegarlo en "Operation" en el playground de GraphQL, deberia quedar como la siguiente imagen.`_**

<br>

![query_graphql_getAllUsers](./assets/query.png)

<br>

## **_Luego proceda a hacer click en el boton `Run` que figura en la anterior imagen, esto ejecutara nuestra `Query`, y si todo resulto correcte, en el apartado de `Response` deberia mostrarnos nuestros usuarios._**

<br>

![response_graphql_getAllUsers](./assets/response.png)

<br>

# **_¡ENHORABUENA!_**

## Has logrado crear un servidor con Apollo Server v4 y GraphQL. Has aprendido a crear tu esquema de GraphQL, definiste tus TypeDefs y creaste un resolvedor para mostrar los usuarios que simulaste en el Playground de GraphQL. Además, ejecutaste con éxito tu primera consulta.

## ¡Te felicito por este logro! Ahora, para continuar mejorando, te sugiero que sigas las instrucciones del archivo [README.md](https://github.com/neriheredia/APOLLO_SERVER_AND_CLIENT_GRAPHQL/tree/master/client) que se encuentra en la carpeta de client. ¡Sigue adelante y sigue mejorando tus habilidades en GraphQL y Apollo Server!

<br>
<br>
<br>

## Autor

### Este proyecto fue desarrollado por [Neri Heredia](https://github.com/neriheredia).
