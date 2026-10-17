import readlineSync from 'readline-sync';

export const saludo = () => {
var nombreUsuario = readlineSync.question('¿Cuál es tu nombre? ');
console.log('¡Hola, ' + nombreUsuario + '!');
};
