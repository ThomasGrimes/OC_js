/*var prenom;
var nom;

prenom = prompt("Quel est votre prénom ?");
nom = prompt("Quel est votre nom ?");

alert("Bonjour " + prenom + " " + nom);


var a = 2;
a = a - 1;
a++;
var b = 8;
b += 2;
var c = a + b * b;
var d = a * b + b;
var e = a * (b + b);
var f = a * b / a;
var g = b / a * a;


var celsius;
var fahrenheit;
var result;

celsius = prompt("Donnez une température (en Celsius)");

celsius = Number(celsius);

fahrenheit = (celsius * (9 / 5)) + 32;

result = celsius + " °C = " + fahrenheit + " °F";

console.log(result); */


var nombre1 = 5;
var nombre2 = 3;

var inversion;

inversion = nombre1;
nombre1 = nombre2;
nombre2 = inversion;


console.log(nombre1); // Doit afficher 3
console.log(nombre2); // Doit afficher 5