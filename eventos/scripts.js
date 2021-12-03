/* 
Un evento es cualquier cosa que sucede en nuestro documento
Sintaxis correcta

    Element.addEventListener('event', callback)

Eventos de ratón:
    click - cuando pulsamos el botón izquierdo del ratón
    dblclick - cuando pulsamos dos veces seguidas el botón izquierdo del ratón
    mouseenter - cuando entramos en la zona que tiene el evento
    mouseleave - cuando salimos de la zona que tiene el evento
    mousedown - cuando pulsamos el boton izquierdo del ratón
    mouseup - cuando soltamos el boton izquierdo del ratón
    mousemove - cuando movemos el ratón

Eventos de teclado:
    keydown - cuando pulsamos una tecla
    keyup - cuando soltamos una tecla
    keypress - cuando pulsamos una tecla y no la soltamos
*/
// const button = document.getElementById('button')
// const box = document.getElementById('box')

// button.addEventListener('click', () => {
//     console.log('CLICK')
// })

// button.addEventListener('dblclick', () => {
//     console.log('Doble CLICK')
// })

// box.addEventListener('mouseenter', () => {
//     box.classList.replace('red', 'green')
// })

// box.addEventListener('mouseleave', () => {
//     box.classList.replace('green', 'red')
// })

// box.addEventListener('mousedown', () => {
//     console.log('Has pulsado en la caja')
// }) //usado generalmente para arrastrar elementos, se reconoce el evento de mantener pulsado y luego se suelta el elemento

// box.addEventListener('mouseup', () => {
//     console.log('Has dejado de pulsar en la caja')
// })

// box.addEventListener('mousemove', () => {
//     console.log('Estas moviendo el ratón sobre la caja')
// })

// const input = document.getElementById('input')
// input.addEventListener('keydown', () => {
//     console.log('Has pulsado una tecla')
// })

input.addEventListener('keyup', () => {
    console.log('Has soltado una tecla')
})

input.addEventListener('keypress', () => {
    console.log('Estas pulsando una tecla')
})