// ################################# JdR Avancée ###################################
/*
var Personnage = {
    initPerso: function (nom, sante, force) {
        this.nom = nom;
        this.sante = sante;
        this.force = force;
        this.pieces = 10;
        this.key = 1;
    },

    attaquer: function (cible) {
        if (this.sante > 0) {
            var degats = this.force;
            console.log(this.nom + " attaque " + cible.nom + ". Il lui fait " + degats + " points de dégâts.");
            cible.sante = cible.sante - degats;
            if (cible.sante > 0) {
                console.log(cible.nom + " a encore " + cible.sante + " points de vie.");
            } else {
                cible.sante = 0;
                console.log(cible.nom + " est mort !");
            }
        } else {
            console.log(this.nom + " ne peut pas attaquer car il est décédé.");
        }
    }
};

var Joueur = Object.create(Personnage);
Joueur.initJoueur = function (nom, sante, force) {
    this.initPerso(nom, sante, force);
    this.xp = 0;
}

Joueur.combattre = function (cible) {
    this.attaquer(cible);
    if (cible.sante === 0) {
        this.xp += cible.valeur;
        this.pieces += cible.pieces;
        this.key += cible.key;
        console.log(this.nom + " a tué " + cible.nom + " et gagne " + cible.valeur + " points d'experience, "+cible.pieces+" pieces d'or et "+cible.key+" clé(s)")
    }
}

Joueur.decrire = function () {
    var description = this.nom + " a " + this.sante + " points de vie, " +
        this.force + " en force, " + this.xp + " points d'expérience, "+this.pieces+ " pièces d'or et "+ this.key+" clé(s)";
    return description;
}

var Monstre = Object.create(Personnage);
Monstre.initMonstre = function (nom, sante, force, race, valeur) {
    this.initPerso(nom, sante, force);
    this.race = race;
    this.valeur = valeur;
}

var glacius = Object.create(Joueur);
glacius.initJoueur("Glacius", 130, 30);

var aurora = Object.create(Joueur);
aurora.initJoueur("Aurora", 150, 25);



var zogzog = Object.create(Monstre);
zogzog.initMonstre("Zogzog", 40, 20, "Orc", 10);

console.log("Bienvenue dans ce jeu d'aventure ! Voici nos courageux héros :");

console.log(aurora.decrire());
console.log(glacius.decrire());

console.log("Un affreux monstre arrive : c'est un " + zogzog.race + " nommé " + zogzog.nom);

zogzog.attaquer(aurora);
zogzog.attaquer(glacius);

aurora.combattre(zogzog);
glacius.combattre(zogzog);

console.log(aurora.decrire());
console.log(glacius.decrire());


// ################################# Chien Avancée ###################################


var Chien = {
    init: function (nom, race, taille) {
        this.nom = nom;
        this.race = race;
        this.taille = taille;
    },
        aboyer: function () {
            if (this.taille < 25) {
                var aboiement = "Kaii ! Kaii !";
                return aboiement;
            } else {
                var aboiement = "Grrr ! Grrr !"
                return aboiement;
            }
        }
    }

var crokdur = Object.create(Chien);
crokdur.init("Crokdur", "mâtin de Naples", 75);
console.log(crokdur.nom + " est un " + crokdur.race + " mesurant " + crokdur.taille + " cm");
console.log("Tiens, un chat ! " + crokdur.nom + " aboie : " + crokdur.aboyer());

var pupuce = Object.create(Chien);
pupuce.init("Pupuce", "bichon", 22);
console.log(pupuce.nom + " est un " + pupuce.race + " mesurant " + pupuce.taille + " cm");
console.log("Tiens, un chat ! " + pupuce.nom + " aboie : " + pupuce.aboyer());
*/


// ################################# Compte bancaire Avancé ###################################


var CompteBancaire = {
    initCB: function (titulaire, solde) {
        this.titulaire = titulaire;
        this.solde = solde;
    },

    decrire: function () {
        var etat = "Titulaire : " + this.titulaire + ", solde : " + this.solde + " euros.";
        return etat;
    },

    crediter: function (montant) {
        this.solde += montant;
    },

    debiter: function (montant) {
        this.solde -= montant;
    }

}

var CompteEpargne = Object.create(CompteBancaire);
CompteEpargne.initCE = function (titulaire, solde, interet) {
    this.initCB(titulaire, solde);
    this.interet = interet;
}

CompteEpargne.ajouterInterets = function(){
    var montantInteret = this.solde * 0.05;
    this.solde += montantInteret;
}





var compte1 = Object.create(CompteBancaire);
compte1.initCB("Alex", 100);
var compte2 = Object.create(CompteEpargne);
compte2.initCE("Marco", 50, 0.05);

console.log("Voici l'état initial des comptes :");
console.log(compte1.decrire());
console.log(compte2.decrire());

var montant = Number(prompt("Entrez le montant à transférer entre les comptes :"));
compte1.debiter(montant);
compte2.crediter(montant);

// Calcule et ajoute les intérêts au solde du compte
compte2.ajouterInterets();

console.log("Voici l'état final des comptes après transfert et calcul des intérêts :");
console.log(compte1.decrire());
console.log(compte2.decrire());
