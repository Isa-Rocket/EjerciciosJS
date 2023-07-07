let miNombre;
miNombre = "Isa";
console .log (miNombre);

let miApellido;
miApellido = "Berizzo";

let miEdad;
miEdad = "35";

let miMascota;
miMascota = "Elfi"

let edadMascota = 6

console .log (miApellido);
console .log (miEdad);
console .log (miMascota);
console.log (edadMascota)

let nombreCompleto = `Mi nombre es ${miNombre} ${miApellido}` 
console.log (nombreCompleto)

let personalidad = `${nombreCompleto} y tengo ${miEdad} y mi perro se llama ${miMascota} y tiene ${edadMascota}`
console.log (personalidad)

let restaEdad = miEdad - edadMascota
console.log (restaEdad)

let multiEdad = miEdad * edadMascota
console.log (multiEdad)

let diviEdad = miEdad / edadMascota
console.log (diviEdad)

//Por que no me suma los numeros?
let sumaEdad = miEdad + edadMascota
console.log (sumaEdad)

//Objetos

let alumno = {
    nombre: "Isa",
    mascota: true,
    nivelEstudios: 3,
    colorFav: "blue",
    whatsapp: "5493487566419",
}
console.log (alumno)
console.table (alumno)

let mascota ={
    nombre: "Elfi",
    edad: 6,
    razaGrande: true,
    color: "negro",
}

console.log (mascota)
console.table (mascota)

let frutas = ["banana", "manzana", "pera", "naranja", "piña"]

console.log (frutas)
console.log (frutas [3])

let textoAleatorio =["manzana", 6,  ]

let numeros = [3, 4, 5, 6, 9]
console.log (numeros)

let familia1 = [ "elefante, leon, jabali, suricata, jirafa"]
let familia = ["elefante", "leon", "jabali", "suricata", "jirafa"]
console.log (familia)
console.log (familia1)

let ingreseEdad = prompt("ingrese su edad")
console.log (ingreseEdad)
let soymayordeedad = (ingreseEdad >= 18)
console.log (soymayordeedad)

let edad1 = prompt("ingrese su edad")

let edad2 = prompt("ingrese su edad")

let soyMayor = (edad1 > edad2)
let soyMenor = (edad1 < edad2)
let soyIgual = (edad1 = edad2)

console.log (soyMayor)
console.log (soyMenor)
console.log (soyIgual)
