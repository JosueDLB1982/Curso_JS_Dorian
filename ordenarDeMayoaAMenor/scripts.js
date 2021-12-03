/*  Codigo para ordenar 3 números de mayor a menor */

/*  
FORMA CORRECTA METODO .SORT

const array = [95, 8, 7, 23, 1, 150, 35, 42]
const arrayOrdenado = array.sort((a,b) => b-a)
console.log(arrayOrdenado)

*/

const numbers = document.getElementById('numbers');
const result = document.getElementById('result');

let a = Math.abs(prompt('Introduzca el primer número'));
let b = Math.abs(prompt('Introduzca el segundo número'));
let c = Math.abs(prompt('Introduzca el último número'));

numbers.textContent = `los números introducidos son ${a}, ${b} y ${c}`


if (a>=b && a>=c) {
    if (b>c) {
        result.textContent = `El número mayor es ${a}, seguido de ${b} y el menor es ${c}`;
    }
    else {
        result.textContent = `El número mayor es ${a}, seguido de ${c} y el menor es ${b}`;
    }
}
else if (b>=a && b>=c) {
    if (a>c) {
        result.textContent = `El número mayor es ${b} seguido de ${a} y el menor es ${c}`;
    }
    else {
        result.textContent = `El número mayor es ${b} seguido de ${c} y el menor es ${a}`;
    }
}
else if(c>=a && c>=b) {
    if (a>b) {
        result.textContent = `El número mayor es ${c} seguido de ${a} y el menor es ${b}`;
    }
    else {
        result.textContent = `El número mayor es ${c} seguido de ${b} y el menor es ${a}`;
    }
}
    
    
