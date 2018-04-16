// ################################### Mousquetaires ###########################################
/*
console.log("Voici les 3 mousquetaires :");

var mousquetaires = ["Aramis", "Portos", "Athos"];

for (var i = 0; i <= mousquetaires.length-1; i++) {
    console.log(mousquetaires[i]);
}

mousquetaires.push("D'Artagnan");

console.log("A présent, ils sont quatre !");

mousquetaires.forEach(function (perso) {
    console.log(perso);
});

// ################################### Somme ###########################################

var valeurs = [11, 3, 7, 2, 9, 10];
var result=0;
valeurs.forEach(function(nb){
   result += nb ;
});

console.log(result);


// ################################### Nb plus élevé ###########################################

var valeurs = [152, 152, 65, 89, 9, 10];
var result = 0;
valeurs.forEach(function (nb) {
    if (nb > result) {
        result = nb;
    }
});

console.log("Le nombre le plus élevé est "+result);



// ################################### Saisit jusqu'a valeur d'arret ###########################################

var mots = "";
var motsFormate = "";
var stop = false;
var result = [];

while (stop === false) {
    mots = prompt("Entrez un mots. Marquez Stop pour arreter.");
    motsFormate = mots.toLocaleLowerCase();
    
    if (motsFormate === "stop") {
        stop = true;
    } else {
        result.push(mots);
    }
}




console.log(result);


// ################################### Saisit jusqu'a valeur d'arret ###########################################

var films = [];

var Film = {
    init: function (titre, sortie, realisateur) {
        this.titre = titre;
        this.sortie = sortie;
        this.realisateur = realisateur;

    },

    description: function () {
        var info = this.titre + " ( " + this.sortie + ", " + this.realisateur + " )";
        return info;
    }
}

for (var u = 1; u <= 3; u++) {
    films.push("film" + u);
}

films.forEach (function(variableName) {
    var titre = prompt("Indiquez le nom d'un film");
    var sortie = prompt("Indiquez son année de sortie");
    var realisateur = prompt("Indiquez son réalisateur");
    

    variableName = Object.create(Film);
    variableName.init(titre, sortie, realisateur);
    films.push(variableName);

});

films.forEach(function (film) {
    console.log(film.description());
});

*/

// ################################### Chenil ###########################################


var Chien = {
    // initialise le chien
    init: function (nom, race, taille) {
        this.nom = nom;
        this.race = race;
        this.taille = taille;
    },
    // Renvoie l'aboiement du chien
    aboyer: function () {
        var aboiement = "Whoua ! Whoua !";
        if (this.taille < 25) {
            aboiement = "Kaii ! Kaii !";
        } else if (this.taille > 60) {
            aboiement = "Grrr ! Grrr !";
        }
        return aboiement;
    }
};

var chiens=[];

var crockdur = Object.create(Chien);
crockdur.init("Crockdur", "mâtin de Naples", 75);
chiens.push(crockdur);

var pupuce=Object.create(Chien);
pupuce.init("Pupuce", "bichon", 22);
chiens.push(pupuce);

var medor = Object.create(Chien);
medor.init("Médor", "labrador", 58);
chiens.push(medor);

console.log("Le chenil heberge 3 chiens");

chiens.forEach(function(chien){
    console.log(chien.nom+" est un "+chien.race+" mesurant "+chien.taille+"cm. Il aboie : "+chien.aboyer());
});

