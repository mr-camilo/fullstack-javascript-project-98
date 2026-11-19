const MAX_ALEATORIO = 50;

export const instruccion =
  "Encuentra el máximo común divisor de los números dados.";

export const generarRonda = () => {
  const numAleatorio1 = Math.floor(Math.random() * MAX_ALEATORIO) + 1;
  const numAleatorio2 = Math.floor(Math.random() * MAX_ALEATORIO) + 1;
  const pregunta = `${numAleatorio1} ${numAleatorio2}`;
  const iteraciones = { numA: numAleatorio1, numB: numAleatorio2 };
  let residuo;

  while (iteraciones.numB > 0) {
    residuo = iteraciones.numA % iteraciones.numB;
    iteraciones.numA = iteraciones.numB;
    iteraciones.numB = residuo;
  }

  return { pregunta, respuestaCorrecta: String(iteraciones.numA) };
};
