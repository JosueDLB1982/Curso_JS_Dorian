const button = document.getElementById('button')

// button.addEventListener('click', () => {
    // const newPost = {
    //     title: 'A new post',
    //     body: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    //     userId: 1
    // }
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify(newPost),
//         headers: {
//             "Content-type": "application/json"
//         }
//     })
//         .then(response => response.json())
//         .then(data => console.log(data))
// }) 

button.addEventListener('click', () => {
    axios({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/posts',
        data: {
            title: 'A new post',
            body: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            userId: 1
        }
    }).then (response => console.log(response.data))
      .catch (error => console.log(error))
}) 