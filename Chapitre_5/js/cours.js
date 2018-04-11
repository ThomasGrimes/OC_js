//############################ Dire Bonjour (function) ##################################
/*
function direBonjour(prenom, nom) {
    var message = console.log("Bonjour " + prenom + " " + nom);
    return message;
}

var prenom = prompt("Quel est votre prenom ?");
var nom = prompt("Quel est votre nom ?");

direBonjour(prenom, nom);

//############################ Carre ##################################


function carre(x) {
    return x * x;
}

for (var i = 1; i <= 10; i++) {
    console.log(carre(i));
}

//############################ Min() ##################################

function min(x, y){
    if(x>y){
        return y;
    }
    else{
        return x;
    }
}

console.log(min(4.5, 5)); // Doit afficher 4.5
console.log(min(19, 9)); // Doit afficher 9
console.log(min(1, 1)); // Doit afficher 1
*/
//############################ Calculer() ##################################


function calculer(nbX, operator, nbY) {
    switch (operator) {
        case "+":
            return nbX + nbY;
            break;
        case "*":
            return nbX * nbY;
            break;
        case "/":
            return nbX / nbY;
            break;
        case "-":
            return nbX - nbY;
            break;
        default:
            console.log("Il y a une erreur");

    }
}

console.log(calculer(4, "+", 6)); // Doit afficher 10
console.log(calculer(4, "-", 6)); // Doit afficher -2
console.log(calculer(2, "*", 0)); // Doit afficher 0
console.log(calculer(12, "/", 0)); // Doit afficher Infinity
