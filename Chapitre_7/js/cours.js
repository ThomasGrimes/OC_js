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
    var result = "";
    for (var u = mots.length - 1; u >= 0; u--) {
        result += mots[u];

    }
    return result;
}

console.log("Ecrit a l'envers : " + inverser(mot));

var motFormate = mot.toLowerCase();

if (inverser(motFormate) === motFormate) {
    console.log("C'est un palindrome");
} else {
    console.log("Ce n'est pas un palindrome");
}


function convertirEnLeetSpeak(mots) {
    var formate = mots.toLowerCase();
    var result = "";
    for (var v = 0; v <= formate.length - 1; v++) {
        var letter = formate[v];

        switch (letter) {
            case "a":
                letter = "4";
                result += letter
                break;
            case "b":
                letter = "8";
                result += letter
                break;
            case "e":
                letter = "3";
                result += letter
                break;
            case "l":
                letter = "1";
                result += letter
                break;
            case "o":
                letter = "0";
                result += letter
                break;
            case "s":
                letter = "5";
                result += letter
                break;
            default:
                result += letter
                break;
        }
    }
    return result;
}

console.log(convertirEnLeetSpeak(mot));
