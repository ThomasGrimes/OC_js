/* 
Activité : gestion des contacts
*/

var option;
var contacts = [];

var Contact = {
    init: function (nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
        contacts.push(this);
    },

    info: function () {
        return "Nom : " + this.nom + " Prénom : " + this.prenom;
    }
}

var initialContact1 = Object.create(Contact);
initialContact1.init("Lévisse", "Carole");

var initialContact2 = Object.create(Contact);
initialContact2.init("Nelson", "Mélodie");

console.log("Bienvenue dans le gestionnaire de contacts");

while (option !== 0) {
    console.log("Choisissez une option : \n 1 : Lister contacts \n 2 : Ajouter un contact "/*\n 3 : Supprimer un contact */+"\n 0 : Quitter");
    option = Number(prompt("Choisir une option"));

    switch (option) {
        case 1:
            contacts.forEach(function (contact) {
                console.log(contact.info());
            });
            break;
        case 2:
            var newLastName = prompt("Indiquez le nom du nouveau contact");
            var newFirstName = prompt("Indiquez le prénom du nouveau contact");

            var newContact = Object.create(Contact);
            newContact.init(newLastName, newFirstName);
            console.log("Le nouveau contact a bien été ajouté !");
            break;
        /*
        EXPLICATION DU CASE 3 : suppression
        
        Le case 3 ajoute la suppression. 
        Elle intègre :
        - Le listing des contacts avec un indice pour chacun qui débute a 1
        - la demande de saisi de l'indice du contact a supprimer par l'utilisateur
        - La vérification que l'indice choisi fait bien partie de la liste (via la longueur de la liste)
        - le récap de la demande de suppression en indiquant le contact choisi
        - la validation de la suppression (Avec prise en charge d'une mauvaise entrée)
        
        SAUF QUE !
        
        Je sélectionne l'élément a supprimer via son indice dans le tableau, mais le soucis est que une fois une entrée supprimée, les entrées suivantes ne "redescendent" pas.
        
        Exemple : Je supprime l'indice 2 du tableau. l'entrée avec l'indice 3 ne devient pas l'indice 2 du tableau.
        
        De ce faîte, on ne peut pas supprimer 2 fois le même indice .... =,(
        
        (Deception, frustration, qui mène au côté obscur de la force ... ^^)
        
        Si vous souhaitez la tester, décommentez le case 3 et décommentez dans le choix des options (reintégrez le dans les guillemets et enlevez le +)
        
        
        P.S : Je n'ai pas mis directement console.log dans la méthode info() de Contact, justement a cause de la suppression. Sinon a la ligne 83 j'aurai eu console.log(...console.log(...))
        
        
        
        */
        
       /* case 3:
            if (contacts.length === 0) {
                console.log("Votre liste de contact est vide. Ajoutez des contacts avant de pouvoir les supprimer");
            } else {
                var i = 0;
                contacts.forEach(function (contact) {
                    i++;
                    console.log(i + " : " + contact.info());
                });
                console.log("\nIndiquez le numéro du contact à supprimer");
                var suppress = Number(prompt("Quel contact souhaitez vous supprimer ?")) - 1;

                if ((suppress >= 0) && (suppress <= contacts.length - 1)) {
                    console.log("Vous avez choisi de supprimer " + contacts[suppress].info());
                    var validation = prompt("Êtes-vous sûr ? (O/N)");
                    var validationFormate = validation.toLowerCase();
                    if (validationFormate === "o") {
                        delete contacts[suppress];
                        console.log("Le contact a été supprimé");
                    } else if (validationFormate === "n"){
                        console.log("Suppression annulée");
                    } else {
                        console.log("Ce n'est pas une entrée valide");
                    }

                } else {
                    console.log("Le contact choisi n'existe pas");
                }
            }
            break; */
        case 0:
            break;
        default:
            console.log("Cette option n'existe pas !");
            break;
    }
}

console.log("Vous avez choisi de quitter le gestionnaire de contact\nAu-revoir !");
