# Iniciar el Peyecto

Este proyecto tiene 2 carpetas, una es la conexion con la base de datos /server y el otro todo el crud /client

## Iniciar el Crud
en la terminal navegamos hasta estar dentro de la carpeta client y ejecutamos
### `npm install`
### `npm start`
Abrimos [http://localhost:3000](http://localhost:3000) en el navegador.

### creamos la base de datos, en este proyecto fue utilizado mysql<br>
Ejecutamos el siguiente codigo que esta entre llaves en la base de datos de preferencia para crear las tablas<br>
{<br>
CREATE DATABASE IF NOT EXISTS \`usuario_crud\` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci \*/ /\*!80016 DEFAULT ENCRYPTION='N' */;<br>
USE \`usuario_crud\`;

CREATE TABLE IF NOT EXISTS \`usuarios\` ( <br>
  \`id\` int NOT NULL AUTO_INCREMENT,<br>
  \`nombre\` varchar(100) DEFAULT NULL,<br>
  \`apellido\` varchar(100) DEFAULT NULL,<br>
  \`edad\` int DEFAULT NULL,<br>
  \`pais\` varchar(100) DEFAULT NULL,<br>
  PRIMARY KEY (\`id\`)<br>
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;<br>
}

## Iniciar el servidor
en otra terminal navegamos hasta estar dentro de la carpeta server y ejecutamos
### `node index.js`
