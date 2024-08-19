# Iniciar el Peyecto

Este proyecto tiene 2 carpetas, una es la conexion con la base de datos /server y el otro todo el crud /client

## Iniciar el Crud
en la terminal navegamos hasta estar dentro de la carpeta client y ejecutamos
### `npm start`
Abrimos [http://localhost:3000](http://localhost:3000) en el navegador.

### creamos la base de datos, en este proyecto fue utilizado mysql<br>
Ejecutamos el siguiente codigo que esta entre llaves en la base de datos de preferencia para crear las tablas
{
CREATE DATABASE IF NOT EXISTS `usuario_crud` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `usuario_crud`;

### Volcando estructura para tabla usuario_crud.usuarios
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `apellido` varchar(100) DEFAULT NULL,
  `edad` int DEFAULT NULL,
  `pais` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
}

## Iniciar el servidor
en otra terminal navegamos hasta estar dentro de la carpeta server y ejecutamos
### `node index.js`
