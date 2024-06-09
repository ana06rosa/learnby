import UserModel from "../../models/User.js";
import bcrypt from "bcrypt";
import generarToken from "./functions/generarToken.js";

const registerUserGet = (req, res) => {
  res.render("user/register");
};

const registerUserPost = async (req, res) => {
  const { firstName, lastName, age, sex, email, password } = req.body;

if (!firstName || !lastName || !age || !sex || !email || !password) {
  return res.status(400).json({ error: 'Todos los campos son requeridos' });
}

  try {
    const user = new UserModel({
      firstName,
      lastName,
      age,
      sex,
      email,
      password: bcrypt.hashSync(password, 10),
    });

    await user.save();

    const token = generarToken(user);

    res.status(201).json({ message: "User registered successfully", token });
  } catch (error) {
    res.status(500).json({ error: "Error registering user" });
  }
};

export { registerUserPost, registerUserGet };
