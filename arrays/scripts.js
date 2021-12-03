/* 
Son estructuras que nos permiten almacenar varios tipos de datos y agruparlos
Se pueden llenar con cualquier tipo de dato js y deben ir separados por comas
Se pueden mezclar varios tipos de datos pero no se recomienda
Se declaran con []
Pueden declararse vacios o con un contenido ya establecido
Pueden añadirse o eliminarse elementos en el momento que queramos
*/

let numeros = [];
console.log(numeros);
let numerosNuevo = numeros.push = [1, 2, 3, 4, 5];
console.log(numeros);
console.log(numerosNuevo[0]);
console.log(numerosNuevo[0] + numerosNuevo[4]); // Sumando dos elementos de un array

// Concatenando strings de un array
let palabras = ["Josue", "Hola ", "Lopez ", "estas?", "cómo "];
console.log(palabras[1] + palabras[0] + palabras[2] + palabras[4] + palabras[3]);
console.log(palabras[2].length);
console.log(`la cadena ${palabras[0]} tiene ${palabras[0].length} caracteres de longitud`);

/* longitud del array */
console.log(palabras.length);

console.log(palabras);

/* elimina el primer elemento del array */
// podemos guardar en una variable el elemento que borramos
let deleteElementInicio = palabras.shift();
console.log(palabras);
// elimina la última posición del array y la guarda en una variable
let deleteElementFinal = palabras.pop();
console.log(palabras);
console.log(deleteElementInicio);
console.log(deleteElementFinal);

// añadir uno o mas elemntos al final del array y devuelve la longitud del mismo
palabras.push("ejemplo");
console.log(palabras);

//añadir uno o mas elementos al inicio de array
palabras.unshift("ejemplo2", "ejemplo3");
console.log(palabras);
console.log(palabras.length);

/* devuelve el indice del elemento del array que le indiquemos buscar, si no existe devuelve -1. Si hay elementos repetidos solo devolvera la posición del priemro que encuentre. */
console.log(palabras.indexOf("Lopez "));

palabras.push("ejemplo3");
console.log(palabras);

/* revisa la cadena en reversa, devuelve el último indice de leelemento que coincida con la busqueda. */
console.log(palabras.lastIndexOf("ejemplo3"));

/* invierte el orden de los elementos del array */
console.log(palabras);
console.log(palabras.reverse());

/* .join("separador") devuelve un string con el separador que le indiquemos, si lo dejamos vacio, por defecto usará comas para separar */
console.log(palabras);
let palabrasConSeparador = palabras.join(" * ");
console.log(palabrasConSeparador);

/* 
    .splice(a,b,items) - Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
        a - Indice de inicio
        b - Número de elementos (opcional)
        items - Elementos a añadir en el caso de que se añadan. (opcional)
*/
console.log(palabras);
//palabras.splice(3); //elimina desde la posición 3 que es la que le estoy pasando hasta el final
//palabras.splice(3,2); // elimina desde la posición indicada la cantidad de elementos que indicamos con el segundo parametro
palabras.splice(3,1, "ejemplo4", "ejemplo5"); // empieza en el indice 3, elimina la cantidad de elementos especificada en este caso uno "Lopez " y por último inserta en ese espacio del array el elemento del último parametro proporcionado. Si el parámetro b vale 0, no elimina nada, simplemente añade los nuevos elementos a partir de la posición indicada en el parámetro a
console.log(palabras);

/*  .slice(a,b) - Extrae elementos de un array desde el índice a hasta el índice b sin incluir el final. Si no existe b lo hace desde a hasta el final, si no existe ni a ni b hace una copia del original. */
console.log(palabras);
let palabrasNuevas = palabras.slice(2,5);
console.log(palabrasNuevas);