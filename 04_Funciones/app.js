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