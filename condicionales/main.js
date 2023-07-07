//ejercicio 1
let numero1 = 454
let numero2 = 156

if (numero1 < numero2){
    console.log("el primero es menor")}
    else{
        console.log("el segundo es menor")
    }



//ejercicio 2

let numer1 = 34
let numer2 = 34

if (numer1 == numer2){
    console.log("son iguales")}
    else{
        console.log("son diferentes")
    }

//ejercicio 3

let nume1 = 766
let nume2 = 7600

if (nume1 == nume2){
    console.log("son iguales")}
    else if(nume1 > nume2){
        console.log("el primero es mayor")}
        else{
            console.log("el segundo es mayor")
        }


//ejercicio 4

let num1 = prompt("Ingrese el primer número:");
num1 = Number(num1);

let num2 = prompt("Ingrese el segundo número:");
num2 = Number(num2);

let num3 = prompt("Ingrese el tercer número:");
num3 = Number(num3);

let menor = num1;

if (num2 < menor) {
    menor = num2;
}

if (num3 < menor) {
    menor = num3;
}

console.log("El número más chico es: " + menor);


//ejercicio 5

let persona1 = {
    nombre: "Ramiro",
    edad: 54,
    altura: 1.85
};

let persona2 = {
    nombre: "Sebastian",
    edad: 51,
    altura: 1.67
};

if (persona1.altura > persona2.altura) {
    console.log(persona1.nombre + " es más alto que " + persona2.nombre);
} else if (persona1.altura < persona2.altura) {
    console.log(persona2.nombre + " es más alto que " + persona1.nombre);
} else {
    console.log(persona1.nombre + " y " + persona2.nombre + " tienen la misma altura");
}

if (persona1.edad > persona2.edad) {
    console.log(persona1.nombre + " es mayor que " + persona2.nombre);
} else if (persona1.edad < persona2.edad) {
    console.log(persona2.nombre + " es mayor que " + persona1.nombre);
} else {
    console.log(persona1.nombre + " y " + persona2.nombre + " tienen la misma edad");
}

//ejercicio 6

function estaCapacitadoParaConducir() {
    let nombre = prompt("Ingresa tu nombre:");
    let edad = prompt("Ingresa tu edad:");
    let altura = prompt("Ingresa tu altura en centímetros:");
    let vision = prompt("Ingresa tu visión (de 1 a 10):");

    if (edad >= 18 && altura >= 150 && vision >= 8) {
        console.log(`${nombre} está capacitado para conducir`);
    } else {
        console.log(`${nombre} no está capacitado para conducir`);
    }
}

estaCapacitadoParaConducir();

//ejercicio 7

function puedeEntrar() {
    let miNombre = "Isa";
    let nombre = prompt("Ingresa tu nombre:");
    let pase = prompt("Ingresa tu tipo de pase (Vip o Normal):");
    let tieneEntrada = prompt("¿Tienes entrada? (true o false):");

    if (nombre === miNombre || pase === "Vip") {
        console.log(`Bienvenido ${nombre}`);
    } else if (tieneEntrada === "true") {
        let usarEntrada = prompt("¿Deseas usar tu entrada? (true o false):");
        if (usarEntrada === "true") {
            console.log(`Bienvenido ${nombre}`);
        } else {
            console.log(`Adiós ${nombre}`);
        }
    } else {
        let comprar = prompt("¿Deseas comprar una entrada? (true o false):");
        if (comprar === "true") {
            let dinero = prompt("¿Cuánto dinero tienes disponible?");
            if (dinero >= 1000) {
                console.log(`Venta de entrada realizada. Bienvenido ${nombre}`);
            } else {
                console.log(`No se puede realizar la venta de entrada. Vuelve a intentarle otro dia ${nombre}`);
            }
        } else {
            console.log(`Adiós ${nombre}`);
        }
    }
}

puedeEntrar();

//ejercicio 8

function jugarAdivinanza() {
    let numeroIncognita = 5; // cualquier número entre 1 y 10
    let intentos = 3;
  
    while (intentos > 0) {
      let numeroIngresado = prompt("Ingresa un número del 1 al 10:");
      if (numeroIngresado == numeroIncognita) {
        console.log("Ganaste, has adivinado el número");
        return;
      } else if (numeroIngresado < numeroIncognita) {
        console.log("El número ingresado es menor, vuelve a intentarlo");
      } else {
        console.log("El número ingresado es mayor, vuelve a intentarlo");
      }
      intentos--;
    }
  
    console.log("La próxima vez será!");
  }
  
  jugarAdivinanza();
  

//ejercicio 9

jugarAdivinanza();

function determinarEdad() {
    let edad = prompt("Ingresa tu edad:");

    if (edad >= 0 && edad <= 12) {
        console.log("Eres un infante");
    } else if (edad >= 13 && edad <= 18) {
        console.log("Eres un adolescente");
    } else if (edad >= 19 && edad <= 45) {
        console.log("Eres un mayor joven");
    } else if (edad > 45 && edad <= 100) {
        console.log("Eres un anciano jaja");
    } else if (edad > 100) {
        let confirmacion = prompt("¿Realmente tienes esa edad? (true o false):");
        if (confirmacion === "true") {
            console.log("Eres un anciano jaja");
        } else {
            console.log("Edad no válida");
        }
    } else {
        console.log("Edad no válida");
    }
}

determinarEdad();


//ejercicio 10

function jugarPiedraPapelTijeras() {
    let jugador1 = prompt("Jugador 1: Ingresa PIEDRA, PAPEL o TIJERAS:");
    let jugador2 = prompt("Jugador 2: Ingresa PIEDRA, PAPEL o TIJERAS:");

    if (
        (jugador1 === "PIEDRA" && jugador2 === "TIJERAS") ||
        (jugador1 === "PAPEL" && jugador2 === "PIEDRA") ||
        (jugador1 === "TIJERAS" && jugador2 === "PAPEL")
    ) {
        console.log("Gana el Jugador 1");
    } else if (
        (jugador2 === "PIEDRA" && jugador1 === "TIJERAS") ||
        (jugador2 === "PAPEL" && jugador1 === "PIEDRA") ||
        (jugador2 === "TIJERAS" && jugador1 === "PAPEL")
    ) {
        console.log("Gana el Jugador 2");
    } else if (
        jugador1 === "PIEDRA" ||
        jugador1 === "PAPEL" ||
        jugador1 === "TIJERAS"
    ) {
        console.log("Empate");
    } else {
        console.log("Uno de los jugadores ha hecho trampa");
    }
}

jugarPiedraPapelTijeras();

//ejercicio 11

function mostrarMensajeColor() {
    let color = prompt("Ingresa un color:");

    switch (color) {
        case "blanco":
        case "negro":
            console.log("Falta de color");
            break;
        case "verde":
            console.log("El color de la naturaleza");
            break;
        case "azul":
            console.log("El color del agua");
            break;
        case "amarillo":
            console.log("El color del sol");
            break;
        case "rojo":
            console.log("El color del fuego");
            break;
        case "marron":
            console.log("El color de la tierra");
            break;
        default:
            console.log("Excelente color, no lo teníamos pensado");
    }
}

mostrarMensajeColor();

//ejercicio 12

function calcular() {
    let valor1 = prompt("Ingresa el primer valor numérico:");
    let valor2 = prompt("Ingresa el segundo valor numérico:");
    let operacion = prompt("Ingresa la operación (suma, resta, multiplicación o división):");

    switch (operacion) {
        case "suma":
            console.log(`El resultado de la suma es ${Number(valor1) + Number(valor2)}`);
            break;
        case "resta":
            console.log(`El resultado de la resta es ${valor1 - valor2}`);
            break;
        case "multiplicación":
            console.log(`El resultado de la multiplicación es ${valor1 * valor2}`);
            break;
        case "división":
            if (valor2 == 0) {
                console.log("ERROR: No se puede dividir por cero");
            } else {
                console.log(`El resultado de la división es ${valor1 / valor2}`);
            }
            break;
        default:
            console.log("Operación no válida");
    }
}

calcular();


//ejercicio 13

function imprimirTriangulo() {
    let lado = 5;
    for (let i = 1; i <= lado; i++) {
        console.log("*".repeat(i));
    }
}

imprimirTriangulo();
function ingresarDNI() {
    let nombre = prompt("Ingresa tu nombre:");
    let apellido = prompt("Ingresa tu apellido:");
    let numero = prompt("Ingresa tu número de DNI:");
    let fechaNacimiento = prompt("Ingresa tu fecha de nacimiento (dd/mm/aaaa):");
    let direccion = prompt("Ingresa tu dirección:");

    console.log(`Nombre: ${nombre}`);
    console.log(`Apellido: ${apellido}`);
    console.log(`Número de DNI: ${numero}`);
    console.log(`Fecha de nacimiento: ${fechaNacimiento}`);
    console.log(`Dirección: ${direccion}`);

    let confirmacion = prompt("¿Están correctos los datos? (true o false):");
    if (confirmacion === "true") {
        let dni = {
            nombre: nombre,
            apellido: apellido,
            numero: numero,
            fechaNacimiento: fechaNacimiento,
            direccion: direccion
        };
        console.table(dni);
        console.log("Registro exitoso");
    } else {
        console.log("Vuelve a intentarlo en un mes");
    }
}

ingresarDNI()