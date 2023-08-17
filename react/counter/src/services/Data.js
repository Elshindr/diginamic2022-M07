
export default class Data {
  static url = 'http://localhost:3000/counters';
  static async loadCounters() {
    // Pour rappel la fonction fetch retourne une promesse
    return fetch(this.url)
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