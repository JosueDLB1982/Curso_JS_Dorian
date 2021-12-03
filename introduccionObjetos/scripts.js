/* 
    OBJETOS

    Son estructuras de datos que representan propiedades, valores y comportamientos de dicha estructura, que describe un elemento del mundo tangible por así decirlo.
    Hablando por ejemplo de una persona, puedo hacer un objeto para describirla que contenga sus caracteristicas principales, por ejemplo su nombre, edad y número de hijos. Tambien puede tener comportamientos pero eso lo estudiaremos más adelante.
*/

const person = {
    name: 'Josue',
    age: 39,
    sons: ['Caleb', 'Enoc', 'Oliver', 'Evelin', 'Diego']
}

console.log(person); //objeto
console.log(person.sons[0]); //hijo en el indice 0
console.log(person["name"]); // propiedad name del objeto

for (const key in person) {
    //console.log(key)
    console.log(person[key]) // person[key] me permite imprimir (acceder) al contenido de la clave en lugar de la clave en si.
}

for (const son of person.sons) { //puesto que person.sons es un array se puede iterar así con for of
    console.log(son)
}

//imprimir todo el contenido del array en una frase
console.log(`Hola, mi nombre es ${person.name}. Tengo ${person.age} años y 5  hijos llamados ${person.sons.join(", ")}`)
