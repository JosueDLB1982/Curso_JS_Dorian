/* 
BUCLES

Se usan cuando necesitamos repetir un trozo de codigo
Existen bucles determinados e indeterminados

    Bucle indeterminado while:
        Es indeterminado porque no sabemos cuantas veces se va a repetir
        Se compone de una única parte que es la condición de salida

            while(condición){
                código a ejecutar
            }

     Cuando la condición se cumpla se rompera el bucle y se pasara a la instrucción siguiente despues del bucle. El bucle while podría no ejecutarse nunca si no se da la condición.
     
     Bucle indeterminado do while:
        Es indeterminado porque no sabemos cuantas veces se va a repetir
        Su sintaxis tiene dos partes. Código a ejecutar y condición de salida
            
        do{
            //código a ejecutar
        } while(condición)

    El do while siempre se ejecuta al menos una vez, independientemente de la condición.
*/

let pass = "";

while (pass != "hola") {
    pass = prompt("Introduzca su contraseña")
}
console.log("Fin del bucle");

// do {
//     pass = prompt("Introduzca su contraseña")
// } while(pass != "hola");
// console.log("Fin del bucle");