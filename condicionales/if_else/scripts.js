console.log("Hola");

/* Un condicional es una estructura de control de flujo. Hay condicionales simples, compuestos y múltiples. También tenemos los bucles.  */

/* condicional simple if */
// let num = -8;
// if(num>0) {
//     console.log(`${num} es mayor que 0`);
// }

/* compuesta if else */
// let num2 = 2;
// if(num2>3) {
//     console.log(`${num2} es mayor que 3`);
// }
// else {
//     console.log(`${num2} es menor que 3`);
// }

/* Condicional múltiple

En los ejemplos anteriores, da error si colocamos 3, dirá que es menor que 3. Ahí entran los condicionales múltiples */
// let num3 = 9;
// if(num3===8) {
//     console.log(`${num3} es igual que 8`);
// }
// else if (num3<8){
//     console.log(`${num3} es menor que 8`);
// }
// else {
//     console.log(`${num3} es mayor que 8`);
// }

/* Añadiendo operadores lógicos podemos comprobar varias condiciones a la vez 
&& y
|| o
*/

let num = 0;
let num2 = 5;

if (num<1 && num2>4) {
    console.log(`${num} es menor que 1 y ${num2} es mayor que 4`);
}
else {
    console.log(`Las condicones no se cumplen.`);
}