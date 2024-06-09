import UserModel from "../../models/User.js";
import bcrypt from "bcrypt";
import generarToken from "./functions/generarToken.js";

const loginUserGet = (req, res) => {
  res.render("user/login");
};

const loginUserPost = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Buscar el usuario por email
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    // Comparar la contraseña proporcionada con la contraseña encriptada almacenada
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    const token = generarToken(user);

    // Si todo va bien, enviar una respuesta de éxito
    res.status(200).json({ message: "User logged in successfully", token });
  } catch (error) {
    res.status(500).json({ error: "Error logging in user" });
  }
};

export { loginUserGet, loginUserPost };
