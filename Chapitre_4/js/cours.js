// ###################### Tour de manège #################################
/*
for (var i = 1; i <= 10; i++) {
    console.log("C'est le tour numéro " + i);
}


// ###################### Nombre pair #################################




var nbUser = Number(prompt("Saisissez un nombre :"));

for (var i = 1; i <= 10; i++) {
    if (nbUser % 2 === 0) {
        console.log(nbUser + " est pair");
        nbUser++;
    } else {
        console.log(nbUser + " est impair");
        nbUser++;
    }
}


// ###################### Saisie #################################

var choix = 0;

while (choix < 50 || choix > 100) {
    choix = Number(prompt("Choisissez un nombre entre 50 et 100 :"));
}

console.log("Vous avez choisi " + choix);


// ###################### Multiplication #################################


var nb = 0;

while (nb < 2 || nb > 9) {
    nb = Number(prompt("Choisissez un nombre entre 2 et 9 :"));
}

for (var i = 1; i <= 10; i++) {
    console.log(nb + " x " + i + " = " + i * nb);
}
*/

// ###################### ni oui ni non #################################

var rep = prompt("Voulez-vous jouer au ni oui, ni non ?");

while ((rep !== "oui") && (rep !== "non")) {
    rep = prompt("Voulez-vous jouer au ni oui, ni non ?");
}
