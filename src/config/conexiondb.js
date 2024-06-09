import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoURL = process.env.MONGO_URL;

// Set strictQuery option
mongoose.set("strictQuery", false);

// Configurar la conexión a MongoDB
mongoose
  .connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conexión exitosa a MongoDB"))
  .catch((err) => console.error("Error al conectar con MongoDB:", err));

export default mongoose;
