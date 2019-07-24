/*
function bienvenido(){
    console.log('hola bienvenido a las funciones');
}

bienvenido();

function cuadradoNumero(num){
    var resultado = num * num;
    return resultado;
}

var numero = 3;
var valor = cuadradoNumero(numero);
console.log(valor);
console.log(cuadradoNumero(5));

function convertirFAHaCelsius(gradoFah){
    var celsius = (gradoFah - 32) * 5 / 9;
    return celsius;
}

var tempUno = convertirFAHaCelsius(32);
var tempDos = convertirFAHaCelsius(68);
console.log(tempUno);
console.log(tempDos);

function calcularEdad(yearNacimiento) {
    return 2019 - yearNacimiento;
}

var edad = calcularEdad(1997);
console.log(edad);

function calcularJubilacion(year, name) {
    var edad = calcularEdad(year);
    var cuantoFalta = 65 - edad;
    var resultado;

    if (edad < 65) {
        resultado = console.log(name + ' le faltan ' + cuantoFalta + ' años para pensionarse.');
    }else {
        resultado = console.log(name + ' ya se pensionó.');
    }
    return resultado;
}

calcularJubilacion(1997, 'maria');
*/

/*
// Funciones como Expresiones
var nombre;
var test = function(n){
    return 'Hola ' + n;
}
nombre = 'pablo';
console.log(test(nombre));

// Argumentos nulos
var a;
a = null;
var valorNulo = function(a){
    return a;
}
console.log(valorNulo(a));


// Argumentos por default.
var sumar = function(a, b = 4, c = 3) {
    return a + b + c;
}

console.log(sumar(10, null, 4));

// Plantillas de cadenas (template string).
var nombre = 'Pablo';
console.log(`tu nombre es ${nombre}`);

var a = 10;
var b = 5;

console.log(`la suma es ${a + b}`);
*/

// Calcular las funciones

var calcularScore = function(name, positiva, negativa){
    var porPos = (positiva / 100) * 100;
    var porNeg = (negativa / 100) * 100;
    var score = '';

    if(porPos > 90){
        score = 'A';
    }else if(porPos >= 70){
        score = 'B';
    }else if(porPos >= 45){
        score = 'C';
    }else{
        score = 'D';
    }

    return `${name} Tiene el score de ${score}, positivas: ${porPos}% y negativas ${porNeg}%`;
}

var resultado = calcularScore('pablo', 72, 28);
console.log(resultado);