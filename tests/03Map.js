//const fruits = ["Melon", "Cerise"];
const fruits = new Array("Melon", "Cerise");
console.log(`fruits`, fruits);
// Map est une fonction pure qui renvoie un nouveau tableau
// dont les éléments sont transformés par la fonction de callback
const fruits_map = fruits.map((fruit, index) => `<li>${fruit}${index}</li>`);
console.log(fruits);
console.log(fruits_map);

// Utilisation de la méthode map

