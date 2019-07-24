//arreglos en JS
var names = ['Pablo', 'Carlos', 'Ana', 'Teresa'];
var vegetables = new Array('tomate', 'lechuga','cebolla');


console.log(vegetables[1]);

names[1] = 'Jose';

console.log(names[1]);
console.log(names);
console.log(names.length);

// operaciones con arreglos

var fruits = ['pera', 'manzana', 'uva', 'sandia'];
console.log(fruits);

/*
for(var i=0; i<= fruits.length -1; i++){
    console.log(fruits[i]);
}


fruits.forEach(function (elemento, indice, array){
    console.log(elemento, indice);
})
*/
/*
fruits.push('naranja');
console.log(fruits);

fruits.unshift('fresa');
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.shift();
console.log(fruits);

var pos = fruits.indexOf('uva');
console.log(pos);

fruits.splice(1,2);
console.log(fruits);


// Arreglo con elementos de diferentes tipos
var persona = ['pablo', 'felipe', 22, 'test string', 1.84];
console.log(persona);


// Objetos Literales
var persona = {
    name: 'Pablo',
    lastName: 'Chaparro',
    gustos: ['futbol', 'english', 'peliculas'],
    trabajo: 'Programador',
    esCasado: true
};

console.log(persona.lastName);
console.log(persona['trabajo']);
persona.esCasado = false;
console.log(persona.esCasado);

// Objetos con la sintaxis object
var persona2 = new Object();
persona2.nombre = 'Ana';
persona2.apellido = 'gomez';
persona2['trabajo'] = 'webDeveloper';

console.log(persona2);
*/

// Objetos y métodos
var persona = {
    // Propiedades
    name: 'Pablo',
    lastName: 'Chaparro',
    gustos: ['futbol', 'english', 'peliculas'],
    trabajo: 'Programador',
    esCasado: true,
    yearNacimiento: 1997,

    //métodos
    calcularEdad: function() {
        this.edad = 2019 - this.yearNacimiento;
    }
};

persona.calcularEdad();
console.log(persona);