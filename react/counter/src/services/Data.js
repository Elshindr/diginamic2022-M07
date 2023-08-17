
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
  static async addCounter(initial_value = 0) {
    // Pour rappel la fonction fetch retourne une promesse
    return fetch(this.url,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({ "value": initial_value })
      })
      .then((res) => { console.log(res) })
      .catch((error) => { console.error(error) })
  }
}