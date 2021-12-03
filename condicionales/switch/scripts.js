/* 
Estructura switch

Se utiliza oara elegir un camino de varios prestablecidos. Tenemos dos principales:
  
    Sintaxis Simple
switch(evaluación) {
    case n1: 
        //código
    break;
    case n2:
        //código
    break;
    default:
         //código
}
Sintaxis Múltiple
switch(evaluación) {
    case n1:
    case n2:
    case n3:
    case n4:
        //código
    break;
    case n5:
    case n6:
        //código
    break;
    default:
         //código
} 
*/

/* sintaxis simple */
let num = 4;

switch(num) {
    case 1: console.log(`${num} tiene el valor 1`);
    break;
    case 2: console.log(`${num} tiene el valor 2`);
    break;
    default: console.log(`${num} tiene un valor distinto a 1 o 2`);
}

/*  Sintaxis Múltiple */
switch(num) {
    case 1:
    case 3:
    case 5:
    console.log(`${num} es impar`);
    break;
    case 2:
    case 4:
    console.log(`${num} es par`);
    break;
    default: console.log(`la opción no esta contemplada`);

}

