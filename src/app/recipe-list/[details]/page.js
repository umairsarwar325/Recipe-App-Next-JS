import axios from "axios";
import RecipeDetails from "@/components/recipe-details"

const getSingleRecipe = (recipeId) => {
  return axios
    .get(`https://dummyjson.com/recipes/${recipeId}`)
    .then((Response) => {
      return Response.data;
    });
};

const details = async ({ params }) => {
  const singleRecipe = await getSingleRecipe(params.details);

  return <RecipeDetails singleRecipe={singleRecipe}/>;
};

export default details;
