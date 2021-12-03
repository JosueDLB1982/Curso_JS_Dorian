/* 
    FUNCIONES

    Son fragmentos de código que escribimos para ejecutar una tarea y no tener que volver a escribir el mismo código más de una vez. Bastará con invocar la función.
    Ayudan a modularizar el código.
    Las funciones deben realizarf una sola tarea.

        function nombreFuncion() {
            //código a ejecutar
        }

        Sintaxis nueva funcion flecha arrow function:
        const nombreFuncion = () => {
            //código a ejecutar
        }

    Las funciones pueden recibir parámetros, son los datos que usará para ejecutarse.
    Las funciones pueden devolver valores, objetos, array u otros.
*/
'use strict'

const operaciones = (num1, num2) => {
    let suma = parseInt(num1) + parseInt(num2)
    console.log(`La suma es ${suma}`)

    let resta = parseInt(num1) - parseInt(num2)
    console.log(`La resta es ${resta}`)

    let multiplicacion = parseInt(num1) * parseInt(num2)
    console.log(`La multiplicación es ${multiplicacion}`)

    let division = parseInt(num1) / parseInt(num2)
    console.log(`La división es ${division}`)

    let potencia = (Math.pow(parseInt(num1), parseInt(num2)))
    console.log(`La potencia es ${potencia}`)
}
operaciones(5,2)
    

function saludar (user){
    console.log(`Hola ${user}. Sigue estudiando`)
}
saludar('Josue')