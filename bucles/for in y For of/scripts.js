/* 
    Simplifica el bucle for tradicional, al no necesitar un número de vueltas ni tener que realizar incremento.


*/

let names = ["Josue", "David", "Lopez", "Borjas"];

for (let index in names) { //imprime el indice del array
    if (index === "2") {
       break;
        //continue;
    }
    console.log(`El índice es ${index}`)
}

for (let name of names) { //imprime el contenido del indice actual
    if (name === "David") {
       // break; // rompe la ejecucuión
       continue; //salta la coincidencia y continua con el resto
    }
    console.log(name)
}