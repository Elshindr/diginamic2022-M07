

// Rappel sur les prototypes

// Chaque fois que l'on utilise une fonction constructeur, une proprité prototype est automatiquement créée et elle va être partagée par toutes les instances issues de cette fonction constructeur

function Bike(model) {
  this.model = model;
}

// Création d'une instance de Bike
const rr = new Bike("Rockrider");
Bike.prototype.brand = "Decathlon";
console.log(`Marque de rr : `, rr.brand);
console.log(`rr: `, rr);

