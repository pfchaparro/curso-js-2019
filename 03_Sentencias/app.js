var alumno1 = 'Pablo';
var alumno2 = 'Maria';

var nota1Alumno1 = 14;
var nota2Alumno1 = 18;
var nota3Alumno1 = 16;

var nota1Alumno2 = 12;
var nota2Alumno2 = 18;
var nota3Alumno2 = 10;

var promedioAlumno1 = (nota1Alumno1 + nota2Alumno1 + nota3Alumno1) / 3;
var promedioAlumno2 = (nota1Alumno2 + nota2Alumno2 + nota3Alumno2) / 3;

if(promedioAlumno1 > promedioAlumno2) {
    console.log(alumno1 + ' tiene el mayor promedio.');
}else if(promedioAlumno2 > promedioAlumno1) {
    console.log(alumno2 + ' tiene el mayor promedio.');
}else {
    console.log('Los promedios son iguales');
}
for(var i = 1; i <= 2; i++) {
    if(i === 1){
        if(promedioAlumno1 > 13){
            console.log('Pablo está aprobado');
        }else {
            console.log('Pablo está desaprobado');
        }
    }else {
        if(promedioAlumno2 > 13){
            console.log('Maria está aprobado');
        }else {
            console.log('Maria está desaprobado');
        }
    }
}