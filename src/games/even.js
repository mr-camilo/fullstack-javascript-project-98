const MAX_ALEATORIO = 100;
const esPar = (num) => num % 2 === 0;

export const instruccion =
  'Responde "yes" si el número es par, de lo contrario responde "no".';

export const generarRonda = () => {
  const numAleatorio = Math.floor(Math.random() * MAX_ALEATORIO);

  const respuestaCorrecta = esPar(numAleatorio) ? "yes" : "no";

  return { pregunta: numAleatorio, respuestaCorrecta };
};
