/* A partir de ES6 */

//const numbers = [-12,2,3,23,43,2,3]
//console.log(numbers)
//console.log(...numbers)

/* Usos del operador de expansión */
// ENVIAR ELEMENTOS DE UN ARRAY A UNA FUNCIÓN

// const addNumbers = (a, b, c) => {
//     console.log(a+b+c)
// }
// addNumbers(1,2,3)

// let numbersToAdd = [1,2,3]
// addNumbers(numbersToAdd)
// addNumbers(...numbersToAdd) // al usar el operador de expansión eliminamos el error

// AÑADIR UN ARRAY A OTRO ARRAY
// let users = ['Javier', 'David', 'Rosa', 'Juan', 'Mercedes']
// let newUsers = ['Marta', 'Jaime', 'Laura']
// users.push(newUsers[0], newUsers[1], newUsers[2]) //podría se run modo
//users.push(...newUsers) // este es el modo correcto, no importa cuantos usuarios haya. Se puede aplicar con todos los métodos.
// console.log(users)

/* COPIAR ARRAYS */
// let array = [1,2,3,4,5,6]
// console.log(array)
// let newArray = [...array]
// console.log(newArray)

/* CONCATENAR ARRAYS */
// let newArray = [6,7,8]
// let arrayConcat = array.concat(newArray) // Así con el método .concat
// let array = [1,2,3,4,5,]
// console.log(arrayConcat)
// let arrayConcat2 = [...array, ...newArray] // eso es todo
// console.log(arrayConcat2)

/* ENVIAR UN NÚMERO INDEFINIDO DE ARGUMENTOS O PARÁMETROS A UNA FUNCIÓN (PARÁMETROS REST) 
*/
// const restParam =(...numbers) => {
//     console.log(numbers)
// }
// restParam(1,2) //Puedo pasar aquí todos los parámetros que necesite sin necesidad de conocerlos de antemano. Se usa frecuentemenete al llamar la función desde una API o una DB y no sabemos el número de elementos que necesita la función para trabajar.

/* PARA TRABAJAR CON LA LIBRERÍA MATH */
// const numbers = [-12,2,3,23,43,2,3]
// console.log(Math.max(numbers)) // No puede sacar el max de un array
// console.log(Math.max(...numbers)) // lo expandimos y se resuelve :)
// console.log(Math.min(numbers))
// console.log(Math.min(...numbers))

/* ELIMINAR ELEMNTOS DUPLICADOS */
const numbers = [-12,2,3,23,43,2,3]
console.log(new Set(numbers)) // nos muestra un objeto en el que se han eliminado los duplicados, es una caracteristica del objeto Set, pero si lo queremos en array, usamos el spread operator
console.log([...new Set(numbers.sort((a,b) => a-b))]) // adicionalmente le aplique .sort para ordenar de menor a mayor