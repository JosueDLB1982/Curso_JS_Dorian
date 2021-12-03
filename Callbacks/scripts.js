/* Un Callback es una función que se ejecuta a través de otra función. Los callbacks no son asíncronos, es decir, se ejecutan en orden. */

// const getUser = (id, cb) => {
//     const user = {
//         name: 'Josue',
//         id:id
//     }
//     if(id!=1) cb('User no exist')
//     else cb(null, user)
// }
// getUser(1, (error, user) => {
//     if(error) return console.log(error)
//     console.log(`User name is ${user.name}`)
// })

const users = [
    {
        id: 1,
        name: 'Josue'
    },
    {
        id: 2,
        name: 'David'
    },
    {
        id: 3,
        name: 'Caleb'
    }
]

const emails = [
    {
        id: 1,
        email: 'josue@gmail.com'
    },
    {
        id: 2,
        email: 'david@hotmail.com'
    }
]

const getUser = (id, cb) => {
    const user = users.find(user => user.id==id)
    if(!user) cb(`No exist a user with id ${id}`)
    else cb(null, user)
}

const getEmail = (user, cb) => {
    const email = emails.find(email => email.id == user.id)
    if(!email) cb(`${user.name} hasn't email`)
    else cb(null, {
        id: user.id,
        name: user.name,
        email : email.email
    })
}

getUser(1, (error, user) => {
    if(error) return console.log(error)
    getEmail(user, (error, response) => {
        if(error) return console.log(error)
        console.log(response)
    })
    
})