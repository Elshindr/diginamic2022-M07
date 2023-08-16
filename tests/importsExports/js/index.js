// l'import sans bloc de code récupère obligatoirement l'export par défaut
import  Person, { test as toto } from "./Person.js";
const p = new Person("Bob");
p.present();
p.name = "Simon";
p.present();
//toto();
// Qu'est-ce qu'une référence et une valeur ?
// En définitive, avec le mot clé const, je peux changer
// la valeur mais pas la référence (emplacement mémoire)
console.log(``);
