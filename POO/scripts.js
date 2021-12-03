/* 
    POO PROGRAMACIÓn ORIENTADA A OBJETOS

    Paradigma de programación que actualiza la forma de programar anterior conocida como estructurada.

    Onceptos fundamentales de la POO:
        . Clase
        . Herencia
        . Objeto
        . Método
        . otros

    Las clases son plantillas que se usan para crear objetos iguales.
    Cuando creamos un objeto, a esa acción se le denomina instanciar un objeto.
    Es necesario crear una función constructora, la cual se deberá llamar cada vez que creemos un objeto.

        class Persona {
            constructor (nombre, apellido, edad) {
                this.nombre = nombre
                this.apellido = apellido
                this.edad = edad
            }
        }

    Convencionalmente las clases se nombran con letra inicial mayúscula. La función costructora debe llamarse por obligación constructor, a esta le pasaremos los parámetros, que en cierta forma son los atributos o características del objeto.

    la palabra rerservada this hace referencia al objeto creado.

    Los objetos tienen funciones asociadas a él, pero en el caso de los objetos se les llama MÉTODOS.

    Para crear un objeto utilizando la clase o plantilla se debe usar la palabra reservada new  y el nombre de la clase

        const juan = new Persona ('Juan', 'García', 23)

    Una vez INSTANCIADO el objeto podremos acceder a sus propiedades y métodos utilizando la nomenclatura del punto o buscando su propiedad en el objeto.
*/

class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad

        //al estar dentro de la función constructora no es necesario incluir el this
        this.datos = `Me llamo ${nombre} ${apellido} y tengo ${edad} años de edad.`
    }
    // creamos un método para el objeto
    saludar() {
        return `Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`
    }
}

// instanciando la clase para crear dos objetos
const josue = new Persona ('Josue', 'Lopez', 39)
const margot = new Persona ('Margót', 'Gonzalez', 32)

//imprimiendo objetos y métodos de objetos
console.log(josue)
console.log(josue.saludar())
console.log(margot.saludar())