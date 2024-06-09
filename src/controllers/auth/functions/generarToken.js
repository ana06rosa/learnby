import jwt from "jsonwebtoken";

const generarToken = (usuario) => {
    const JWTSECRETO = process.env.JWTSECRETO || "jwt-secret";
    const JWTTIEMPO = process.env.JWTTIEMPO || "1h";
  
    const { id, email } = usuario;
  
    const token = jwt.sign(
      {
        id,
        email
      },
  
      JWTSECRETO,
  
      {
        expiresIn: JWTTIEMPO,
      }
    );
  
    return token;
  };
  
  export default generarToken;
  