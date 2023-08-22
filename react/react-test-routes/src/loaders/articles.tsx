import Data from "../services/Data";

export const loader = async()=> {
  const data = Data.getInstance();
  return data.loadArticles();
}