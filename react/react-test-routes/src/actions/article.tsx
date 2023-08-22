import {ActionFunctionArgs} from 'react-router-dom';
import Data from '../services/Data';

export const actionAdd = async({request}: ActionFunctionArgs) => {
  console.log(`Dans actionAdd`);
  // chargement des données qui sont issues du formulaire
  const formData = await request.formData();
  const article_name = formData.get("article_name") as string;
  console.log(`article_name`, article_name);
  const data = Data.getInstance();
  await data.addArticle(article_name);
  return null;
}