/*
 AXIOS es una librería basada en promesas para el cliente y para el servidor.
En informática, una biblioteca o, llamada por vicio del lenguaje, librería (del inglés library) es un conjunto de implementaciones funcionales, codificadas en un lenguaje de programación, que ofrece una interfaz bien definida para la funcionalidad que se invoca.
*/

// const button = document.getElementById('button')

// //res = response = respuesta
// button.addEventListener('click', () => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => response.ok ? Promise.resolve(response) : Promise.reject(response))

//         .then(response => response.json())
//         .then(response => {
//     const list = document.getElementById('list')
//     const fragment = document.createDocumentFragment()
//     for (const userInfo of response) {
//         const listItem = document.createElement('LI')
//         listItem.textContent = `${userInfo.id} - ${userInfo.name}`
//         fragment.appendChild(listItem)
//     }
//     list.appendChild(fragment)
// })
// })

button.addEventListener('click', () => {
    axios({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/users'
    }).then(response => {
        const list = document.getElementById('list')
        const fragment = document.createDocumentFragment()
        for (const userInfo of response.data) {
            const listItem = document.createElement('LI')
            listItem.textContent = `${userInfo.id} - ${userInfo.name}`
            fragment.appendChild(listItem)
        }
        list.appendChild(fragment)
    }).catch(error => console.log(error))
})

