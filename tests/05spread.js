const b = { name: "Dylan" };

const bbis = { ...b, firstname: "Bob", age: 92, name: "José" };

console.log(`bbis`, bbis);

const fruits = ["Melon", "Cerise"];
const fruitsBis = [...fruits, "Fraise"];
console.log(`fruitsBis`, fruitsBis);

let i = true;
{ i && (console.log("hello")) }

const p = { nom: "Dylan", prenom: "Bob" }


const {  prenom:pr, nom } = p;

//const {nom:n, prenom:p} = p;
console.log(`nom : `, nom);
console.log(`prenom : `, pr);
