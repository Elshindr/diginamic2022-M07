
export default class Data {
  constructor() {
    this.url = 'http://localhost:3000/counters'
  }
  static loadCounters() {
    // Pour rappel la fonction fetch retourne une promesse
    return fetch(this.url)
    .then(response => {
      console.log(`response status`, response.status);
      response.json();
    })
    .then(counters => {
      console.log(`counters : `, counters);
    })
    .catch(error => {
      console.error("Erreur attrapée dans loadCounters", + error);
    })
  }
}