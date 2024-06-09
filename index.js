import express from "express";
import chalk from "chalk";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/config/conexiondb.js";
dotenv.config();

// Conectar a la base de datos
connectDB;

const app = express();

// Habilitar CORS
app.use(cors());

// Configurar EJS
app.set("view engine", "ejs");
app.set("views", "./src/views");

// Configurar la carpeta public
app.use(express.static("./src/public"));

//Decodificando la cabecera
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { PORT } = process.env;
const PORT_REAL = PORT || 8000;

// Importar las rutas
import { userRouter } from "./src/routers/index.js";

app.use("/user", userRouter);

app.listen(PORT_REAL, () => {
  console.log(
    chalk.green.bold(`El servidor esta corriendo http://localhost:${PORT_REAL}`)
  );
});
