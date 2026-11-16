import { saludoInicial } from "./cli.js";
import readlineSync from "readline-sync";

const ACIERTOS_CONSECUTIVOS = 3;

export const jugarPartida = (instrucciones, generarRonda) => {
  const nombreUsuario = saludoInicial();
  console.log(instrucciones);

  let aciertos = 0;

  while (aciertos < ACIERTOS_CONSECUTIVOS) {
    const ronda = generarRonda();

    console.log(`Pregunta: ${ronda.pregunta}`);
    const respuestaUsuario = readlineSync.question("Tu respuesta: ", {
      keepWhitespace: true,
    });

    if (ronda.respuestaCorrecta === respuestaUsuario) {
      console.log(`¡Correcto!`);
      aciertos += 1;
      if (aciertos === ACIERTOS_CONSECUTIVOS) {
        console.log(`¡Felicidades, ${nombreUsuario}!`);
      }
    } else {
      console.log(
        `'${respuestaUsuario}' es una respuesta incorrecta ;(. La respuesta correcta era '${ronda.respuestaCorrecta}'.\n¡Intentémoslo de nuevo, ${nombreUsuario}!`,
      );
      break;
    }
  }
};
