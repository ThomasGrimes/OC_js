//############################# Information sur le mot ##########################################
/*
var mot = prompt("Donnez un mot");

console.log("le mot " + mot + " contient " + mot.length + " caractère(s)");
console.log("Il s'écrit en Majuscule " + mot.toUpperCase());
console.log("il s'écrit en Minuscule " + mot.toLowerCase());

*/
//############################# Nombre de voyelles ##########################################


var mot = prompt("Donnez un mot");

console.log("le mot " + mot + " contient " + mot.length + " caractère(s)");
console.log("Il s'écrit en Majuscule " + mot.toUpperCase());
console.log("il s'écrit en Minuscule " + mot.toLowerCase());

var voyelles = 0;
var consonnes = 0;


for (var i = 0; i <= mot.length - 1; i++) {
    var lettre = mot[i];

    switch (lettre) {
        case "a":
            voyelles++;
            break;
        case "e":
            voyelles++;
            break;
        case "i":
            voyelles++;
            break;
        case "o":
            voyelles++;
            break;
        case "u":
            voyelles++;
            break;
        case "y":
            voyelles++;
            break;
        default:
            consonnes++;
    }
}

console.log("le mot " + mot + " contient " + voyelles + " voyelle(s) et " + consonnes + " consonnes.");

function inverser(mots) {
    var mots = "";
    for (var u = mot.length - 1; u >= 0; u--) {
        mots += mot[u];

    }
    return mots;
}

console.log("Ecrit a l'envers : " + inverser(mot));

var motFormate = mot.toLowerCase();

if (inverser(motFormate) === motFormate){
    console.log("C'est un palindrome");
}
else {
    console.log("Ce n'est pas un palindrome");
}





