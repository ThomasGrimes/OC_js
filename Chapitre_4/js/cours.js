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


// ###################### ni oui ni non #################################

var rep = prompt("Voulez-vous jouer au ni oui, ni non ?");

while ((rep !== "oui") && (rep !== "non")) {
    rep = prompt("Voulez-vous jouer au ni oui, ni non ?");
}

// ###################### pyramide #################################

var pyramide = "";

for (var i = 1; i <= 7; i++) {
    pyramide = pyramide + "#";
    console.log(pyramide);
}
*/
// ###################### Fizz Buzz #################################

for (var i = 1; i <= 100; i++) {
    if ((i % 5 === 0) && (i % 3 === 0)) {
        console.log("FizzBuzz");
    } else if ((i % 5 === 0) && (i % 3 !== 0)) {
        console.log("Buzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else {
        console.log(i);
    }
}


