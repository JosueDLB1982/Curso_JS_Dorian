/* 
BUCLE FOR

Es un bucle determinado ya que hay especificar cuantas vueltas dará durante su ejecución
Su sintaxis tiene 3 partes
    - Creación e inicialización de una variable
    - número de vueltas que se repetirá el ciclo
    - incremento o decremento

        for (let i=0; i<10; i++) {
            Código a ejecutar
        }

    Durante su ejecución la variable i aumentará su valor en cada vuelta
*/
let numbers = [10, 11, 12, 13, 14, 15]

for (i=0; i<numbers.length; i++) {
    console.log(`i tiene el valor ${numbers[i]} y su posición en el array es ${i}`)
}
console.log(`El bucle ha terminado quedando la variable i=${i} que es la longitud del array`);

// for (i=10; i>0; i--) {
//     console.log(`i tiene el valor ${i}`)
// }
// console.log(`El bucle ha terminado quedando la variable i=${i}`);