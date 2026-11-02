import { saludoInicial } from "../cli.js";
import readlineSync from "readline-sync";

export const even = () => {
  const ACIERTOS_CONSECUTIVOS = 3;
  const MAX_ALEATORIO = 100;
  const esPar = (num) => num % 2 === 0;
  const obtenerRespuestaCorrecta = (num) => (esPar(num) ? "yes" : "no");

  const nombreUsuario = saludoInicial();
  console.log(
    `Responde "yes" si el número es par, de lo contrario responde "no".`,
  );
  let aciertos = 0;

  while (aciertos < ACIERTOS_CONSECUTIVOS) {
    const numAleatorio = Math.floor(Math.random() * MAX_ALEATORIO);
    console.log(`Pregunta: ${numAleatorio}`);
    const respuestaUsuario = readlineSync.question("Tu respuesta: ");

    const respuestaCorrecta = obtenerRespuestaCorrecta(numAleatorio);

    if (respuestaCorrecta === respuestaUsuario) {
      aciertos++;
      console.log(`¡Correcto!`);
      if (aciertos === ACIERTOS_CONSECUTIVOS) {
        console.log(`¡Felicidades, ${nombreUsuario}!`);
      }
    } else {
      console.log(
        `'${respuestaUsuario}' es una respuesta incorrecta ;(. La respuesta correcta era '${respuestaCorrecta}'.`,
      );
      console.log(`¡Intentémoslo de nuevo, ${nombreUsuario}!`);
      break;
    }
  }
};
