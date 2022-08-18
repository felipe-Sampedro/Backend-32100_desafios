console.log('desafio 1');

class Usuario {
    constructor(nombre,apellido,libros,mascotas){
        this.name=nombre
        this.lastName=apellido
        this.books=libros
        this.pets=mascotas
    }

    getFullName() {
        return `El nombre completo es: ${this.name} ${this.lastName}`;
    }

    addMascota(mascota){
        // this.pets=[...this.pets,mascota]
        this.pets.push(mascota)
    }

    countMascotas(){
        return this.pets.length
    }

    addBook(ejemplar,escritor){
        this.books.push({nombre:ejemplar,"autor":escritor})
    }       

    getBookNames(){
        return this.books.map(a => a.nombre)
    }
}

const persona= new Usuario('felipe','sampedro',[{nombre:'100 años de soledad',autor:'Gabriel Garcia Marquez'}],['perro','gato'])

persona.getFullName()
persona.addMascota('langosta')
persona.countMascotas()
persona.addBook('Ensayo sobre la ceguera',"Jose Saramago")
persona.getBookNames()

console.log(persona);
console.log(persona.getFullName());
console.log(`la cantidad de mascotas ingresadas son ${persona.countMascotas()}`);
console.log(persona.getBookNames());
