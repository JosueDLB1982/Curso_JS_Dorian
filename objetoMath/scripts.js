console.log(Math.E);
console.log(Math.PI);

let num = 5.9;

/* Valor absoluto */
console.log(Math.abs(num));

/* Redondea por exceso */
console.log(Math.ceil(num));

/* Redondea por defecto */
console.log(Math.floor(num));

/* Potencia */
console.log(Math.pow(2, 3));

/* Genera un número pseudoaleatorio entre 0 y 1. Para ampliar el rango, multiplicamos el resultado por el alcance que queramos, aplicando tambien la propiedad round */
console.log(Math.round(Math.random()*100));

/* con esta formula podemos generar un número pseudoaleatorio entre un maximo y un minimo de nuestra elección */
let max = 10;
let min = 5;
console.log(Math.round(Math.random() * (max - min) + min));

/* Devuelve el signo del número que le demos en forma de -1 o 1, o en su defecto un 0 si es lo que le pasamos. Suele usarse en condicionales para saber si un número es + o - */
console.log(Math.sign(-3));
console.log(Math.sign(7));
console.log(Math.sign(0));

/* Devuelve la raiz cuadrada del número que le pasemos */
console.log(Math.sqrt(9));