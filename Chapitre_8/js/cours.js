var Personnage = {
    initPerso: function (nom, sante, force) {
        this.nom = nom;
        this.sante = sante;
        this.force = force;
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
        console.log(this.nom + " a tué " + cible.nom + " et gagne " + cible.valeur + " points d'experience.")
    }
}

Joueur.decrire = function () {
    var description = this.nom + " a " + this.sante + " points de vie, " +
        this.force + " en force et " + this.xp + " points d'expérience.";
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
