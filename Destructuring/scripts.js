/* 
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment
La destructuración es una expresión de JavaScript que hace posible la extracción de datos de arreglos u objetos
*/

// const person = {
//     name: 'Josue',
//     age: 39,
//     email: 'josuedlopez1982@gmail.com'
// }

/* modo tradicional */
// const name = person.name
// const age = person.age
// const email = person.email
// console.log(`Hola, mi nombre es ${name}, tengo ${age} años de edad y mi correo electrónico es ${email}`)

/* Destructuring */
//const {name, age, email} = person // con esta simple línea de código
//console.log(`Hola, mi nombre es ${name}, tengo ${age} años de edad y mi correo electrónico es ${email}`)

/* si necesito reasignar el nombre de la propiedad puedo hacerlo así */
// const {name: nombre, age: edad, email} = person
// console.log(`Hola, mi nombre es ${nombre}, tengo ${edad} años de edad y mi correo electrónico es ${email}`)

const getUsers = async () => {
    const { data: users } = await axios.get('https://jsonplaceholder.typicode.com/users')

    console.log(users)
}

getUsers()