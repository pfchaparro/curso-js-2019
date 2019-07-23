/*
console.log('Hola Mundo');

var primerNombre = 'Pablo';
console.log(primerNombre);

var edad = 22;
var sueldo = 2800.99;

console.log(edad);

var tieneTrabajo = true;
console.log(tieneTrabajo);

tieneTrabajo = null;
console.log(tieneTrabajo);


var primerNombre, edad, sexo, esSoltero;
primerNombre = 'pablo';
edad = 22;
sexo = 'M';
esSoltero = false;

console.log('El nombre es: ' + primerNombre + ', Su edad es: ' + edad + ', es soltero? ' + esSoltero);

edad = 'Veinte';
console.log(edad);


// Operadores Matemáticos
var edadPablo, edadGrover, diferencia, sumaEdades, yearActual, yearGrover, yearPablo;

edadPablo = 22;
edadGrover = 19;
yearActual = 2019;

diferencia = edadPablo - edadGrover;
sumaEdades = edadGrover + edadPablo;

yearGrover = yearActual - edadGrover;
yearPablo = yearActual - edadPablo;

console.log(diferencia);
console.log(sumaEdades);
console.log('Año en que nació Grover: ' + yearGrover);
console.log('Año en que nació Pablo: ' + yearPablo);
console.log(yearActual * 5);
console.log(yearActual / 2);

// Operadores Lógicos
var mayorGrover = edadGrover == edadPablo;
console.log(mayorGrover);

// Operador typeof
console.log(typeof edadGrover);
console.log(typeof edadPablo);
console.log(typeof mayorGrover);
console.log(typeof 'grover es mayor que pablo');

// Operadores unarios aritméticos
//++ Incremento
//-- Decremento
var edadCarmen = 18;
var edadMaria = 14;

console.log(edadCarmen++);
console.log(edadCarmen--);

// Operadores de asignación
// =
var a = 5;
var b = 18;

console.log(a += b);
console.log(a -= b);
console.log(a *= b);
console.log(a /= b);
var c;
c = a % b; // Devuelve el residuo de una división.
console.log(a %= b);
*/

// Calcular el IMC
var pesoLuis = 72;
var alturaLuis = 1.72;

var pesoCarlos = 89;
var alturaCarlos = 1.75;

var IMCLuis = pesoLuis / alturaLuis * alturaLuis;
var IMCCarlos = pesoCarlos / alturaCarlos * alturaCarlos;

var comparacion = IMCCarlos > IMCLuis;

console.log('IMC de Carlos: ' + IMCCarlos);
console.log('IMC de Luis: ' + IMCLuis);
console.log('El IMC de Carlos es superior al de Luis?: ' + comparacion);
