import RecipeList from "@/components/recipe-list";
import axios from "axios";
const getRecipeList = async () => {
  return axios.get("https://dummyjson.com/recipes").then((Response) => {
    return Response.data;
  });
};

const Recipes = async () => {
  let recipesList = await getRecipeList();

  return <RecipeList recipesList={recipesList}/>;
  // return recipesList;
};

export default Recipes;
