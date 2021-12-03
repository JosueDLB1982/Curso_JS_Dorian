/* 
Crea una clase Libro
La clase libro tendrá título, autor, año y género.
Crea un método que devuelva toda la información del libro
Pide 3 libros y guárdalos en un array
Los libros se introducirán al arrancar el programa pidiendo los datos con prompt.
Validar que los campos no se introduzcan vacíos
Validar que el año sea un número y que tenga 4 dígitos
Validar que el género sea: aventuras, terror o fantasía
Crea una función que muestre todos los libros
Crea una función que muestre los autores ordenados alfabéticamente
Crea una función que pida un género y muestre la información de los libros que pertenezcan a ese género usando un el método que devuelve la información
*/

/* creamos la clase con su respectivo constructor asociando los datos de entrada */
class Book {
    constructor(title, author, year, gender) {
        this.title = title
        this.author = author
        this.year = year
        this.gender = gender
    }
    /* método que devuelve el género */
    getGender() {
        return this.gender
    }
    
    /* método que devuelve el autor */
    getAuthor() {
        return this.author
    }

    /* creamos el método que mostrará toda la información del libro */
    bookInfo() {
        return `${this.title} es un libro de ${this.gender} escrito por ${this.author} en el año ${this.year}`
    }
    
}
/* creamos el array donde se van  a guardar los libros, los cuales vamos a pedir a traves del prompt */
let books = []

/* usaremos un bucle while aplicando el método .length para contar la entrada de los tres libros */
while (books.length < 3) {
    let title = prompt('Introduce un título')
    let author = prompt('Introduce el nombre de su escritor')
    let year = prompt('Introduce el año de su edición')
    let gender = prompt('Indíca a qué género pertenece. Puede ser Aventura, Terror o Fantasía').toLowerCase() //para poder validar sin importar que el usuario introduzca mayúsculas
    /* 
        Validar que los campos no se introduzcan vacíos
        Validar que el año sea un número y que tenga 4 dígitos
        Validar que el género sea: aventuras, terror o fantasía

        Dentro del siguiente if harémos todas estas validaciones
    */
                                        //el método isName negado devuelve true si es un número, luego con year.length nos aseguramos que sean 4 dígitos
    if (title != '' && 
        author != '' && 
        !isNaN(year) && 
        year.length == 4 && 
        (gender == 'aventura' || gender == 'terror' || gender == 'fantasía')) {
            
        /* Ahora podemos introducir los datos de los libros y llenar el array */
        books.push(new Book(title, author, year, gender))
    }
}

/* crear una función que muestre todos los libros */
const showAllBooks = () => {
    console.log(books)
}

/* creamos un array para los nombres de los autores */
const showAuthors = () => {
    let authors = []

    /* recorremoa y copiamos al array los autores y con el método sort los imprimimos por consola ya ordenados alfabéticamente */
    for (const book of books) {
        authors.push(book.getAuthor())
    }
    
    console.log(authors.sort())
}

/* función del método para buscar por género */
const showGender = () => {
    const gender = prompt('Introduce el género a buscar')
    for (const book of books) {
        if(book.getGender() == gender)
            console.log(book.bookInfo())
    }
}

showAuthors() // llamado al método que muestra los autores en orden alfabético 
showAllBooks() // llamado al método que muestra la información de todos los libros
showGender() // llamado al método que muestra los resultados de la búsqueda por género


