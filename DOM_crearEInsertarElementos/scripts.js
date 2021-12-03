//DOM - Crear e insertar elementos

/* 
Crear un elemento: document.createElement(element)
Escribir texto en un elemento: element.textContent = texto
Escribir HTML en un elemento: element.innerHTML = código HTML

Añadir un elemento al DOM: parent.appendChild(element)

Fragmentos de código: document.createDocumentFragment()
*/

const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo', 'Día Josue']//si añado elementos, automaticamente se añaden a todo

const title = document.getElementById('title')
const daysList = document.getElementById('daysList')
const selectDays = document.getElementById('daysSelect')

// const itemList = document.createElement('li')
// itemList.textContent = 'Lunes'
// daysList.appendChild(itemList)
title.innerHTML = 'DOM - <span>Crear e Insertar Elementos</span>'


const fragment = document.createDocumentFragment()
const fragment2 = document.createDocumentFragment()

for (const day of days) {
    const itemList = document.createElement('li')
    itemList.textContent = day
    fragment2.appendChild(itemList)
}
daysList.appendChild(fragment2)

for (const day of days) {
    const selectItem = document.createElement('option')
    selectItem.setAttribute('value', day.toLocaleLowerCase())
    selectItem.textContent = day
    fragment.appendChild(selectItem)
}
selectDays.appendChild(fragment)