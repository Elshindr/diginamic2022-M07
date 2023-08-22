import { useLoaderData, useFetcher } from "react-router-dom";
import Article from "./Article";
const Articles = () => {
  const articles: any = useLoaderData();
  console.log(`articles`, articles);
  return (
    <>
      <h2>Liste des articles</h2>
      {articles.map((article: any) => <Article key={article.id} article={article} />)}
    </>
  );
}

export default Articles;