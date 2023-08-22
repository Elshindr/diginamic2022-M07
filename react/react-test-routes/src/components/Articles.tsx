import { useLoaderData, useFetcher } from "react-router-dom";
import Article from "./Article";
const Articles = () => {
  const articles: any = useLoaderData();
  const fetcher = useFetcher();
  console.log(`articles`, articles);
  return (
    <>
      <h2>Ajout d'un article</h2>
      <fetcher.Form action="/add/article" method="POST">
        <label htmlFor="article-name" >Nom de l'article</label>
        <input type="text" name="article_name" id="article-name"/>
        <input type="submit" value="Ajouter un article" />
      </fetcher.Form>
      <h2>Liste des articles</h2>
      {articles.map((article: any) => <Article key={article.id} article={article} />)}
    </>
  );
}

export default Articles;