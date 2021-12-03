const button = document.getElementById('button')

/*
Objeto window - Es el objeto global, de él descienden todos los objetos
    alert()
    prompt()
    confirm()
*/

addEventListener('click', (e) => {
    console.log(e)
})

/* if (confirm('Acepta?')) {
    console.log('El usuario acepto');
} else {
    console.log('El usuario no acepto');
} */

/* Objeto console - Es el objeto que contiene la consola del navegador
    https://developer.mozilla.org/es/docs/Web/API/Console
    console.log()
    console.dir()
    console.error()
    console.table()
*/

console.log(button)
//console.dir(button)

const person = {
    name: 'Josue Lopez Borjas',
    age: 39,
    email: 'josuedlopez1982@gmail.com'
}
console.log(person)
console.table(person)

/* Objeto location - Es el objeto que contiene la barra de direcciones
    https://developer.mozilla.org/es/docs/Web/API/Location
    location.href
    location.protocol
    location.host
    location.pathname
    location.hash
    location.reload()
*/
console.log(location.href) // Direccion completa. Si igualamos su valor a otra url cambiamos a esa pagina el navegador
// location.href = 'https://google.com'
console.log(location.protocol) // Protocolo
console.log(location.host) // Muestra el dominio principal que estamos visualizando
console.log(location.pathname) // Muestra el subdirectorio donde estamos parados
console.log(location.hash)
//location.reload() // Generalmente se coloca dentro de un if para recargar la página ante cierta condición o evento

/* Objeto history // Manipula el historial del navegador, o el historial de la pestaña en la que estamos navegando
    back()
    forward()
    go(n|-n)

    length
*/

//Objeto Date: El objeto date debe ser instanciado. 
const date = new Date()
console.log(date.getDay()) // Imprime el número de día de la semana. 0 es domingo y 6 es sabado. En los meses 0 es enero y 11 diciembre.
console.log(date.getDate()) // Imprime el día (fecha) actual
console.log(date) // Información detallada del día y hora actual

/*
Timers permiten que una función se ejecute x segundos despues de que sea leida

    Timeout: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout

    setTimeout(()=>{code}, delay-in-miliseconds) - Hace que se ejecute la función despues de delay. Si lo referenciamos mediante una variable/constante podemos pararlo con clearTimeout(referencia)

    Interval: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval

    setInterval(()=>{code}, delay-in-miliseconds) - Hace que se ejecute la función cada delay milisegundos. Si lo referenciamos mediante una variable/constante podemos pararlo con clearInterval(referencia)
*/

// button.addEventListener('click',()=>{
//     setTimeout(saludar,5000) // La función saludar se ejecutará 5 seg despues del click
// })



const saludar = () => {
    console.log("Hola Josue. ¡Sigue estudiando!")
}

const interval = setInterval(saludar, 5000)