import readlineSync from "readline-sync";

export const saludoInicial = () => {
  console.log("¡Bienvenido a Brain Games!");
  const nombreUsuario = readlineSync.question("¿Cuál es tu nombre? ");
  console.log(`¡Hola, ${nombreUsuario}!`);
  return nombreUsuario;
};
