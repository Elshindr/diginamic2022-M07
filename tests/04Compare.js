const i = 12
const j = 12;

if (i === j) {
  console.log(`i et j ont des valeurs identiques`);
}

const k = { name: "bob"};
const l = { name: "bob"};

if (k === l) {
  console.log(`k et l sont identiques`);
} else {
  console.log(`k et l ne sont pas identiques c'est à dire qu'ils n'ont pas la même référence mémoire`);
}

const bob = {
  name: "Bob"
};
const bobbis = { ... bob};

if (bob === bobbis) {
  console.log(`bob et bobbis sont identiques`);
}
else {
  console.log(`bob et bobbis ne sont pas identiques c'est à dire qu'ils n'ont pas la même référence mémoire`);
}
// Passage par référence
const b = bob;// b devient un alias de bob

if (b === bob) {
  console.log(`b et bob sont identiques`);
}
else {
  console.log(`b et bob ne sont pas identiques c'est à dire qu'ils n'ont pas la même référence mémoire`);
}