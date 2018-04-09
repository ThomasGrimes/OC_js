// #################### Jours suivant ######################

/*
var today = prompt("Quel jour sommes nous ?");


switch (today) {
    case "Lundi":
        alert("Demain, nous serons Mardi");
    break;
    case "Mardi":
        alert("Demain, nous serons Mercredi");
    break;
    case "Mercredi":
        alert("Demain, nous serons Jeudi");
    break;
    case "Jeudi":
        alert("Demain, nous serons Vendredi");
    break;
    case "Vendredi":
        alert("Demain, nous serons Samedi");
    break;
    case "Samedi":
        alert("Demain, nous serons Dimanche");
    break;
    case "Dimanche":
        alert("Demain, nous serons Lundi");
    break;
    default:
        alert("Ce n'est pas un jour de la semaine !");
    break;
}

// #################### Comparaisons ######################


var nombreA = prompt("Saisissez un premier nombre : ");
var nombreB = prompt("Saisissez un second nombre : ");

if (nombreA > nombreB) {
    console.log(nombreA + " est supérieur a " + nombreB);
}
if (nombreB > nombreA) {
    console.log(nombreA + " est inférieur a " + nombreB);
}
if (nombreA === nombreB) {
    console.log(nombreA + " est égal a " + nombreB)
}

// #################### Bac ######################

alert("Entrez vos notes sur 20");
var noteMath = Number(prompt("Entrer la note en Math : "));
var noteFr = Number(prompt("Entrer la note en Français : "));
var noteScience = Number(prompt("Entrer la note en Science : "));
var noteSport = Number(prompt("Entrer la note en Sport : "));
var notePhilo = Number(prompt("Entrer la note en Philo : "));

var moyenne = (noteFr + noteMath + notePhilo + noteScience + noteSport) / 5;

if (moyenne >= 12) {
    console.log("Félicitation, vous êtes reçu avec mention avec une moyenne de " + moyenne);
} else if ((moyenne >= 10) && (moyenne < 12)) {
    console.log("Félicitation, vous êtes reçu avec une moyenne de " + moyenne);
} else {
    console.log("Désolé, votre moyenne est de " + moyenne + " vous êtes recalé");
}
*/
// #################### Prévision ######################

var nb1 = Number(prompt("Entrez nb1 :"));
var nb2 = Number(prompt("Entrez nb2 :"));
var nb3 = Number(prompt("Entrez nb3 :"));

if (nb1 > nb2) {
    nb1 = nb3 * 2;
} else {
    nb1++;
    if (nb2 > nb3) {
        nb1 = nb1 + nb3 * 3;
    } else {
        nb1 = 0;
        nb3 = nb3 * 2 + nb2;
    }
}