
export default class Data {
  constructor() {
    this.url = 'http://localhost:3000/counters'
  }
  static async loadCounters() {
    // Pour rappel la fonction fetch retourne une promesse
    return fetch('http://localhost:3000/counters')
    .then(response => {
      console.log(`response status`, response.status);
      return response.json();
    })
    .then(counters => {
      return counters;
    })
    .catch(error => {
      console.error("Erreur attrapée dans loadCounters", error);
    })
  }
}