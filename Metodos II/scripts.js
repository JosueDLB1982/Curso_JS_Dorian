/* 
Arrays - Métodos II

.from(iterable) - Convierte en array el elemento iterable
.sort([callback]) - Ordena los elementos de un array alfabéticamente(valor Unicode), si le pasamos un callback los ordena en función del algoritmo que le pasemos.
.forEach(callback(currentValue, [index])) - ejecuta la función indicada una vez por cada elemento del array.
.some(callback) - Comprueba si al menos un elemento del array cumple la condición
.every(callback) - Comprueba si todos los elementos del array cumplen la condición
.map(callback) - Transforma todos los elementos del array y devuelve un nuevo array
.filter(callback) - Filtra todos los elementos del array que cumplan la condición y devuelve un nuevo array
.reduce(callback) - Reduce todos los elementos del array a un único valor
*/

// let word = 'Hola Mundo'
// console.log(Array.from(word))
// console.log(word.split('')) // si le paso un string vacío consigo el mismo resultado


/** SORT
    Sirve para ordenar un array, de menor a mayor o de mayor a menor

const letters = ['b', 'c', 'z', 'a']
console.log(letters)
console.log(letters.sort())

const numbers = [1, 8, 100, 300, 3]
console.log(numbers)
console.log(numbers.sort()) // no funciona, porque ordena según el valor unicode. debmos pasarle un callback para que ordene correctamente.


console.log(numbers.sort((a,b) => a-b)) // a-b ordena de menor a mayor, b-a ordena de mayor a menor.
**/

/**  .forEach(callback(currentValue, [index])) - ejecuta la función indicada una vez por cada elemento del array. **/
// const numbers = [12, 25, 47, 84, 98]
// numbers.forEach((number) => console.log(number))
// numbers.forEach((number, index) => console.log(`${number} esta en la posición ${index}`))

/**  .some(callback) - Comprueba si al menos un elemento del array cumple la condición. .every(callback) - Comprueba si todos los elementos del array cumplen la condición **/
// const words = ['HTML', 'CSS', 'JavaScript', 'PHP']
// console.log(words.some(word => word.length>9))
// console.log(words.some(word => word.length>10))
// console.log(words.every(word => word.length>2)) // todos los elementos deben cumplir la condición

/* .map(callback) - Transforma todos los elementos del array y devuelve un nuevo array */
// const numbers = [12, 25, 47, 84, 98]
// numbers.map((number => console.log(number*2)))
// sería equivalente a 
// for (const number of numbers) {
//     console.log(number*2)
// }
// pero obviamente el método .map ahorra código y es más sencillo.

/* .filter(callback) - Filtra todos los elementos del array que cumplan la condición y devuelve un nuevo array */
const numbers = [1,2,3,4,5]
// const numbers2 = numbers.filter(number => number>40)
// console.log(numbers2)

/* .reduce(callback) - Reduce todos los elementos del array a un único valor */
console.log(numbers.reduce((a,b) => a+b))
const users =[
    {
        name: 'user 1',
        online: true
    },
    {
        name: 'user 2',
        online: true
    },
    {
        name: 'user 3',
        online: false
    },
    {
        name: 'user 4',
        online: true
    },
    {
        name: 'user 5',
        online: false
    },
    {
        name: 'user 6',
        online: true
    }
]
const userOnline = users.reduce((cont, user) => {
    if (user.online) cont++
    return cont
}, 0) // para que cont tenga un valor inicial agregamos una coma y colocamos 0
console.log(`Hay ${userOnline} usuarios conectados`)