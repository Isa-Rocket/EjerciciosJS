//ejercicio 1

function saludar() {

    let nombre = prompt("Ingrese su nombre")
    console.log("Hola:", nombre)
}

saludar()

//ejercicio 2

let resultado1 = multiplicar(10, 3, 2)

function multiplicar(num1, num2, num3) {
    return num1 * num2 * num3
}
console.log(resultado1)

let numero = 70

let resultado = multiplicar(numero, 3, 2)
console.log(resultado)

function multiplicar(num1, num2, num3) {
    return num1 * num2 * num3
}


//ejercicio 3

function sumar(num1, num2, num3) {
    return num1 + num2 + num3

}

console.log(sumar(10, 10, 10))


//ejercicio 4

function restarysumar(num1, num2, num3) {
    return num1 - num2 + num3
}

console.log(restarysumar(100, 50, 25))


//ejercicio 5

function areatriangulo(base, altura) {
    return base * altura / 2
}

console.log(areatriangulo(5, 3))


function perimetro(lado1, lado2, lado3) {
    return lado1 + lado2 + lado3
}
console.log(perimetro(4, 5, 6))


//ejercicio 6

function calcularPrecio(precio, cantidad) {
    let precioTotal = precio * cantidad;

    if (cantidad >= 20) {
        precioTotal *= 0.8;
    } else if (cantidad >= 10) {
        precioTotal *= 0.9;
    }

    return precioTotal;
}

console.log(calcularPrecio(100, 5));
console.log(calcularPrecio(100, 10));
console.log(calcularPrecio(100, 20));


//ejericio 7

function calcularDescuento(precio, cantidad) {
    let precioTotal = precio * cantidad;
    let descuento;

    switch (true) {
        case cantidad >= 20:
            descuento = 0.2;
            break;
        case cantidad >= 10:
            descuento = 0.1;
            break;
        default:
            descuento = 0;
    }

    precioTotal *= 1 - descuento;

    return precioTotal;
}

console.log(calcularDescuento(100, 5));
console.log(calcularDescuento(100, 10));
console.log(calcularDescuento(100, 20));

//ejercicio 8

function esMayorDeEdad(edad) {
    let mensaje = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
    return mensaje;
}

console.log(esMayorDeEdad(15));
console.log(esMayorDeEdad(18));
console.log(esMayorDeEdad(21));

//ejercicio 9 

function calcularImpuesto(ingresoAnual) {
    let impuesto;
    if (ingresoAnual >= 10000) {
        if (ingresoAnual <= 20000) {
            impuesto = ingresoAnual * 0.15;
        } else {
            impuesto = ingresoAnual * 0.2;
        }
    } else {
        impuesto = ingresoAnual * 0.1;
    }
    return impuesto;
}

console.log(calcularImpuesto(5000));
console.log(calcularImpuesto(15000));
console.log(calcularImpuesto(25000));

//ejercicio 10

function verificarDia(dia) {
    let mensaje;
    switch (dia) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            mensaje = "Es día laboral";
            break;
        case 6:
        case 7:
            mensaje = "Es fin de semana";
            break;
        default:
            mensaje = "Día no válido";
    }
    return mensaje;
}

console.log(verificarDia(1)); 
console.log(verificarDia(6)); 
console.log(verificarDia(8)); 


