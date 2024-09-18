import Link from "next/link";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

const RecipeList = ({ recipesList }) => {
  return (
    <div className="w-full h-screen bg-zinc-900 flex flex-col justify-between gap-2">
      {/* {console.log(recipesList)} */}
      <Link
        href={"/"}
        className="bg-blue-700 p-3 hover:bg-blue-900 transition-all"
      >
        {" "}
        « home
      </Link>
      <div className="h-[90%] w-full grid grid-cols-3 gap-7">
        {recipesList?.recipes.length > 0
          ? recipesList.recipes.map((recipe) => (
              <Link key={recipe.id} href={`/recipe-list/${recipe.id}`}>
                <Card
                  className={
                    "w-full p-2 h-full bg-white shadow-white scale-[0.95] hover:bg-zinc-300 hover:scale-[1] transition-all"
                  }
                >
                  <CardContent
                    className={
                      "w-full p-0 object-cover object-center overflow-hidden"
                    }
                  >
                    <img
                      className="w-full h-full object-cover object-center rounded-md"
                      src={recipe.image}
                      alt=""
                    />
                  </CardContent>
                  <CardTitle className={"mt-2 text-gray-800"}>
                    {recipe.name}
                  </CardTitle>
                  <CardDescription className={"mt-2 text-gray-800"}>
                    Rating: {recipe.rating}
                  </CardDescription>
                </Card>
              </Link>
            ))
          : null}
      </div>
    </div>
  );
};

export default RecipeList;
