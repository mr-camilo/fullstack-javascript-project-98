const MAX_ALEATORIO = 50;
const OPERACIONES_ARITMETICAS = ["+", "-", "*"];

export const instruccion = "¿Cuál es el resultado de la expresión?";

export const generarRonda = () => {
  const operando1 = Math.floor(Math.random() * MAX_ALEATORIO);
  const operando2 = Math.floor(Math.random() * MAX_ALEATORIO);
  const operacion =
    OPERACIONES_ARITMETICAS[
      Math.floor(Math.random() * OPERACIONES_ARITMETICAS.length)
    ];
  let respuestaCorrecta;
  const pregunta = `${operando1} ${operacion} ${operando2}`;

  switch (operacion) {
    case "+":
      respuestaCorrecta = operando1 + operando2;
      break;
    case "-":
      respuestaCorrecta = operando1 - operando2;
      break;
    case "*":
      respuestaCorrecta = operando1 * operando2;
      break;
  }

  return { pregunta, respuestaCorrecta: String(respuestaCorrecta) };
};
