// Examinar el DOM
console.dir(document);
console.log(document.body);
console.log(document.all);
console.log(document.getElementById('header-title'));

var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
//console.log(header);
headerTitle.textContent = 'Hola';
headerTitle.innerText = 'Hello 2';
headerTitle.innerHTML = '<h3>Prueba</h3>';