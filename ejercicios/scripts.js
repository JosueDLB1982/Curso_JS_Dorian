/*  
    EJERCICIO 1

    Solicita un nombre, la edad y muestra por consola "Hola ____ tienes ___ años de edad. El próximo año tendras ___ años"
    Realiza el ejercicio con prompt y has uso de templates string
*/

// let name = prompt('Introduzca su nombre');
// let age = parseInt(prompt('Introduzca su edad'));

// console.log(`Hola ${name}, tu edad es ${age} años. El año próximo tendrás ${age+1}.`)

/*  
    EJERCICIO 2

    Escriba un programa para calcular el área de 3 figuras geométricas. Triángulo, rectángulo y círculo. En primer lugar pregunta de qué figura se quiere calcular el área, despues solicita los datos pertinentes para el calculo y muestra la solución.
*/

// let figure = prompt("Introduce la figura geométrica cuya área quieres calcular. Puedes escoger entre triangle, rectangle y circle");

// let base;
// let height;
// let radius;

// switch (figure) {
//     case "triangle":
//         base = parseInt(prompt("Introduce la base del triángulo"))
//         height = parseInt(prompt("Introduce la altura del triángulo"))
//         console.log(`El área del triángulo es ${base*height/2}`)
//         break;
//     case "rectangle":
//         base = prompt("Introduce la base del rectángulo")
//         height = prompt("Introduce la altura del rectángulo")
//         console.log(`El área del rectángulo es ${base*height}`)
//         break;
//     case "circle": 
//         radius = parseInt(prompt("Introduce el radio del circulo"))
//         console.log(`El área del círculo es ${Math.PI * Math.pow(radius, 2)}`)
//         break;
//     default: console.log(`No se reconoce la figura ingresada`)
// }

/* 
    EJERCICIO 3

    Solicita un número e imprime todos los números pares e impares desde el 1 hasta el número ingresado indicando si sin pares o impares.
*/

// let num = parseInt(prompt("Introduce un número"))

// for (let i=1; i<=num; i++) {
//     if (i%2==0) {
//         console.log(`${i} es un número par`);
//     } else {
//         console.log(`${i} es un número impar`);
//     }
// }

/* 
    EJERCICIO 4

    Escriba un programa que determine si un número introducido por el usuario es primo o no.
*/

let num = parseInt(prompt("Introduce un número"));
let divisores = 0;

if (num === 1) console.log("El número 1 no es valido para esta operación.");
else {
    for (let i=2; i<num; i++) {
        if (num%i == 0) {
            console.log(`${num}/${i}=${num/i} no es primo`);
            divisores++;
            break;
        }
    }
    
}
if (divisores == 0) console.log(`${num} es un número primo`);

/* 
    EJERCICIO 5

    Escriba un programa que pida un número entero mayor que cero y calcule su factorial.
*/

// let num = parseInt(prompt("Introduce un número par  calcular su factorial."));
// let result = 1;

// for (let i = num; i>0; i--) {
//     result *=i
// }
// console.log(`El factorial de ${num} es ${result}`);

/* 
    EJERCICIO 6

    Escriba un programa que permita ir introduciendo una serie de números mientras su suma no supere 50. Cuando esto ocurra, se debe mostra el total acumulado y el contador de cuantos números se han introducido.
*/

// let suma = 0;
// let cont = 0;

// while(suma<50) {
//     suma += parseInt(prompt("introduce un número para añadir a la suma"))
//     cont++
// }
// console.log(`Usted introdujo un total de ${cont} números`);
// console.log(`La suma de todos ellos da ${suma}`);

/* 
    EJERCICIO 7

    Crea 3 arrys. El primero tendra 5 números, el segundo se llamará pares y el tercero impares, ambos estarán vacíos. Después multiplica cada uno de los números del primer array por un número aleatorio entre 1 y 10, si el resultado es par guarda ese número en el array de pares y si es impar en el array de impares. Muestra por consola lod resultados
*/

// const numbers = [3, 43, 21, 20, 56];
// let pares = [];
// let impares = [];

// for (const number of numbers) {
//     let random = Math.round(Math.random() * 10 +1)
//     const result = number * random

//     console.log(`${number} x ${random} = ${result}`)
//     if (result%2==0) {
//         pares.push(result)
//     } else {
//         impares.push(result)
//     }
// }
// console.log(pares);
// console.log(impares);

/* 
    EJERCICIO 8

    Dado un array de letras, solicita un número de DNI y calcula que letra le corresponde. El número no puede ser negativo ni tener más de 8 dígitos. La posición de la letra es el resultado del módulo del número introducido entre 23
*/

// const letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", "T"];

// const dni = (prompt("Introduce tu número de DNI"));

// if (dni.length==8 && parseInt(dni)>0) {
//     console.log(`Tu DNI completo es ${dni}${letras[dni%23]}`)
// }

/* 
    EJERCICIO 9

    Solicitar al usuario una palabra y mostrar por consola el número de consonantes, vocales y longitud de la palabra.
*/

// const palabra = prompt("Introduce una palabra").toLowerCase();

// let consonantes = 0;
// let vocales = 0;

// for (const letra of palabra) {
//     if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") 
//         vocales++;
//     else consonantes++
// }

// console.log(`La palabra que ingresaste es: ${palabra}. Tu palabra tiene ${palabra.length} letras. Entre ellas ${vocales} vocales y ${consonantes} consonantes.`);

/* 
    EJERCICIO 10

    Dado un array que contiene colores, detrminar si el color introducido por el usuario esta dentro del array.
 */

// const colors = ["azul", "amarillo", "rojo", "verde", "rosa"];

// const color = prompt("Introduce un color").toLowerCase();

// if (colors.indexOf(color) !== -1) {
//     console.log(`Tu color se encuentra dentro de las opciones disponibles`);
// } else {
//     console.log(`Opción no disponible`);
// }