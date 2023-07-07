//ejercicio 1
let multiplica = prompt("Ingrese un número para ver su tabla de multiplicar:");
multiplica = Number(multiplica);

for (let i = 1; i <= 10; i++) {
    let resultado = multiplica * i;
    console.log(multiplica + " x " + i + " = " + resultado);
}



//ejercicio 2
let acumula = 0;
let numero;

while (true) {
    numero = prompt("Ingrese un número para acumular (ingrese 0 para parar):");
    numero = Number(numero);

    if (numero === 0) {
        break;
    }

    acumula += numero;
}

console.log("La suma total es: " + acumula);


//ejercicio 3

let ejercicio3 = 50; // el valor viene de acumula manualmente
let intentos = 0;
let numero1;

while (true) {
    numero1 = prompt("Ingrese un número para adivinar el número secreto:");
    numero1 = Number(numero1);
    intentos++;

    if (numero1 === ejercicio3) {
        console.log("¡Felicitaciones! Has adivinado el número secreto en " + intentos + " intentos.");
        break;
    } else if (numero1 > ejercicio3) {
        console.log("El número ingresado es mayor que el número secreto.");
    } else {
        console.log("El número ingresado es menor que el número secreto.");
    }
}


//ejercicio 4

let numi = prompt("Ingrese un número para ver sus divisores:");
numi = Number(numi);

console.log("Los divisores de " + numi + " son:");

for (let i = 1; i <= numi; i++) {
    if (numi % i === 0) {
        console.log(i);
    }
}



//ejercicio 5

/*let miArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < miArray.length; i++) {
    console.log(miArray[i]);
}
*/

//ejercicio 6

/*let miArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < miArray.length; i++) {
    console.log(miArray[i] * 2);
}*/



//ejercicio 7

let familia = [
    {
        nombre: "Tapi",
        mascota: "Perro",
        edad: 30,
        juegaLol: true
    },
    {
        nombre: "Isa",
        mascota: "Gato",
        edad: 28,
        juegaLol: false
    },
    {
        nombre: "Agus",
        mascota: "Pez",
        edad: 25,
        juegaLol: true
    },
    {
        nombre: "Lulu",
        mascota: "Hamster",
        edad: 20,
        juegaLol: false
    },
    {
        nombre: "Vera",
        mascota: "Pájaro",
        edad: 18,
        juegaLol: true
    }
];

for (let i = 0; i < familia.length; i++) {
    let persona = familia[i];
    console.log("Hola, mi nombre es " + persona.nombre + ", tengo una mascota que es un " + persona.mascota + ", tengo " + persona.edad + " años y " + (persona.juegaLol ? "sí" : "no") + " juego al League of Legends.");
}


//ejercicio 9

let miArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < miArray.length; i++) {
    if (miArray[i] % 2 !== 0) {
        console.log(miArray[i]);
    }
}


//ejercicio 10

let sumaPares = 0;
let sumaImpares = 0;
let numerito;

while (true) {
    numerito = prompt("Ingrese un número (ingrese 0 para parar):");
    numerito = Number(numerito);

    if (numerito === 0) {
        break;
    }

    if (numerito % 2 === 0) {
        sumaPares += numerito;
    } else {
        sumaImpares += numerito;
    }
}

console.log("La suma de los números pares es: " + sumaPares);
console.log("La suma de los números impares es: " + sumaImpares);


//ejercicio 11

let miArray2 = [78, 54, 34, 98, 23, 12, 76, 82, 32, 8, 55];
let mayor = miArray2[0];

for (let i = 1; i < miArray2.length; i++) {
    if (miArray2[i] > mayor) {
        mayor = miArray2[i];
    }
}

console.log("El número mayor del array es: " + mayor);


