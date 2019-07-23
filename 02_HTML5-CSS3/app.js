var nombre = 'Pablo';
/*
var estadoCivil = 'soltero';
var estaCasado = false;

if(estadoCivil === 'Casado') {
    console.log(nombre + ' esta casado');
}else {
    console.log(nombre + ' esta Soltero');
}
*/

/*
var nombre = 'Pablo';
var edad = 22;

if(edad < 12) {
    console.log(nombre + ' es un niño.');
}else if((edad > 11) && (edad < 18)){
    console.log(nombre + ' es un adolescente.');
}else if((edad > 17) && (edad < 60)) {
    console.log(nombre + ' es un adulto.');
}else {
    console.log(nombre + ' es un anciano.');
}
*/

// Operador Ternario
var nombre = 'Pablo';
var edad = 19;

edad >= 18 ? console.log(nombre + ' es mayor de edad') : console.log(nombre + ' no es mayor de edad');

// sentencia Switch
var mes = 3;
switch(mes){
    case 1:
        console.log('Enero');
        break;
    case 2:
        console.log('Febrero');
        break;
    case 3:
        console.log('Marzo');
        break;
    case 4:
        console.log('Abril');
        break;
    default:
        break;
}

// Sentencia FOR
for(var i = 1; i <= 10; i++){
    console.log(i);
}

// Sentencia While
var x = 1;
while(x <= 10) {
    console.log(x);
    x++;
}

// Sentencia do while
var z = 12;
do{
    console.log(z);
    z++;
}while(z <= 10)
