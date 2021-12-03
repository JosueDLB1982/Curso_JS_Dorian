/* 
document.getElementById('id') - Acceder a un elemento a través de su id

document | element .querySelector('selectorCSS') - Accede al primer elemento que coincida con el selector CSS

document | element .querySelectorAll('selectorCSS') - Accede a todos los elementos que coincidan con el selector CSS, devuelve un nodeList
*/

const title = document.getElementById('title')
console.log(title)
//title.textContent = 'DOM - Accediendo a Nodos'

//const paragraph = document.querySelector('.paragraph')
// console.log(paragraph)
// const span = paragraph.querySelector('span')
// console.log(span.textContent)

const paragraph = document.querySelectorAll('.paragraph')
console.log(paragraph)

const paragraphArray = Array.from(document.querySelectorAll('.paragraph'))//convierte el nodo a array
paragraphArray.map(p=>p.style.color='blue')