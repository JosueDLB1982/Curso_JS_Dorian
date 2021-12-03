let cadena = "Estoy estudiando javascript con Dorian";
console.log(cadena.length);
console.log(cadena.toUpperCase());
console.log(cadena);
console.log(cadena.toLowerCase());
console.log(cadena.indexOf("t"));/* devuelve la posicion sólo de la primera coincidencia, si no lo encuentra devuelve -1 */
console.log(cadena.replace("estudiando", "practicando"));

/* suprime el inicio y fianl de la cadena, contando desde la posición que le pasemos */
console.log(cadena.substring(3,35));

console.log(cadena.slice(3, -25));

/* elimina los espacios vacios al principio y al final del string */
console.log(cadena.trim());

/* Comprueba si así comienza la cadena, devuelve un valor booleano. Podemos indicar con el segundo parametro desde qué posición del string debe comenzar a buscar */
console.log(cadena.startsWith("estudiando", 6));

/* Comprueba si así termina la cadena, devuelve un valor booleano. Podemos indicar con el segundo parametro hasta qué posición del string debe buscar */
console.log(cadena.endsWith("Dorian", 37));

/* devuelve un valor booleano. Con el segundo parametro le indicamos desde dónde empezar a contar */
console.log(cadena.includes("c", 28));

/* repite el string el número de veces que le indiquemos */
console.log(cadena.repeat(2));

/* template strings, simplifican en gran manera la concatenación de strings */
let nombre = "Josue";
let apellido = "Lopez";
let edad = 39;

console.log("Mi nombre es " + nombre + " " + apellido + " y tengo " + edad + " años de edad.");

console.log(`Mi nombre es ${nombre} ${apellido} y tengo ${edad} años de edad. El próximo año estaré cumpliemdo ${edad+1}`);