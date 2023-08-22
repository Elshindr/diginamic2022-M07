export default class Data {
  private static instance: Data;
  base_url: string;

  private constructor() {
    this.base_url = "http://localhost:3001/";
  }
  /**
   * Contrôle l'accès au constructeur pour n'utiliser qu'une seule instance
   * C'est le coeur du design patter singleton
   * @returns Data
   */
  public static getInstance(): Data {
    if (!Data.instance) {
      Data.instance = new Data();
    }
    return Data.instance;
  }
  async loadArticles() {
    return fetch(this.base_url + "articles")
      .then((response) => {
        return response.json();
      })
      .then((articles) => {
        return articles;
      })
      .catch((error) => {
        console.error("Erreur attrapée dans loadArticles " + error);
      });
  }
}
