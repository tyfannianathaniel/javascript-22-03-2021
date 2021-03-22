// Commentaire sur une ligne

/* 
    Commentaire sur plusieurs lignes
*/

/**
 * Variable: Zone mémoire dans laquelle on va stocker une information
 * let, var et const: création d'une variable
 */

var nom = "Combé";
let prenom = 'David';
const age = 65;
// age = 12 <- erreur, on ne peut pas redefinir la valeur d'une constante
// Uncaught TypeError: invalid assignment to const 'age'
let error = false;

// Affiche un message dans la console du navigateur (F12, onglet console)
// console.log("Combé"); // <- javascript remplace, la variable par sa valeur
console.log(nom);
console.log(prenom);
console.log(age);
console.log(error);

// Concatenation: Ajouter une chaine de caractères à la fin d'une autre
// console.log("SalutTout le monde");
console.log("Salut" + "Tout le monde");

// console.log("La variable nom: " + "Combé");
// console.log("La variable nom: Combé");
console.log("La variable nom: " + nom);

let variable = "c'est pas sorcier";
let variable2 = 'c\'est pas sorcier'; 

console.log("La variable prenom: " + prenom);
prenom = "John";
console.log("La variable prenom: " + prenom);

/**
 * Regle de nommages: 
 */

// 5var = "Salut";
// ma variable = "Salut"
va5d5sd5sd5c22 = "salut";
// console.log(AGE); // <- erreur, cette variable n'est pas définie
// Uncaught ReferenceError: AGE is not defined

let v3; // undefined
let v1, v2; // undefined

v1 = "Salut";
v2 = v1;

console.log( typeof(v2) );