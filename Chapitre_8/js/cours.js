// ############################## JdR ##################################
/*
var perso = {
    nom: "Aurora",
    sante: 150,
    force: 25,
    xp: 0,

    decrire: function () {
        var description = this.nom + " a " + this.sante + " points de vie, " + this.force + " en force et " + this.xp + " points d'experience";
    return description;
    }
};

console.log(perso.decrire());

// Aurora est blessée par une flèche
perso.sante = perso.sante - 20;

// Aurora trouve un bracelet de force
perso.force = perso.force + 10;

// Aurora apprend une nouvelle compétence
perso.xp = perso.xp + 15;

console.log(perso.decrire());

// ############################## Chien ##################################

var chien = {
    nom: "Crockdur",
    race: "mâtin de Naples",
    taille: 75,

    aboyer: function () {
        var grogne="Grrr ! Grrr!"
        return grogne;

    }
};

console.log(chien.nom + " est un " + chien.race + " mesurant " + chien.taille + " cm");
console.log("Tiens, un chat ! " + chien.nom + " aboie : " + chien.aboyer());


// ############################## Calcul périmètre ##################################


var r = Number(prompt("Entrez le rayon d'un cercle :"));

var cercle = {
    rayon: r,
    
    perimetre: function () {
        var result = (this.rayon*2)*Math.PI;
        return result;
    },
    
    aire: function () {
        var result = (this.rayon*this.rayon)*Math.PI;
        return result;
    }
}


console.log("Son périmètre vaut " + cercle.perimetre());
console.log("Son aire vaut " + cercle.aire());

*/

// ############################## Compte bancaire ##################################


var compte = {
        titulaire: "Alex",
        solde: 0,

        crediter: function (x) {
            this.solde = this.solde + x;
        },

        debiter: function (x) {
            this.solde = this.solde - x;
        },
        decrire: function () {
            var result = "Titulaire : " + this.titulaire + ", Solde : " + this.solde;
            return result;
        }
};


console.log(compte.decrire());

var montant = Number(prompt("Combien voulez vous créditer ?"));

compte.crediter(montant);

console.log(compte.decrire());

var debit = Number(prompt("Combien voules vous retirer ?"));

compte.debiter(debit);

console.log(compte.decrire());
