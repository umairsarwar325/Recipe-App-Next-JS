import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const RecipeDetails = ({ singleRecipe }) => {
  return (
    <div className="h-screen w-full p-8 flex justify-between">
      <Card className={"w-[50%] p-2 h-full bg-white shadow-white"}>
        <CardContent
          className={
            "w-full h-full p-0 object-cover object-center overflow-hidden"
          }
        >
          <img
            className="w-full h-full object-cover object-center rounded-md"
            src={singleRecipe.image}
            alt=""
          />
        </CardContent>
      </Card>

      <div className="w-[50%] h-full text-white flex flex-col p-4">
      <Link
        href={"/recipe-list"}
        className="p-3 bg-blue-900 mb-2 rounded-sm hover:bg-blue-900 transition-all"
      >
        {" "}
        Go Back
      </Link>
        <h1 className="text-2xl font-bold text-center">{singleRecipe.name}</h1>
        <h1 className="text-2xl mt-3">Ingrediants</h1>
        <ul className="mt-1">
          {singleRecipe.ingredients.map((ind) => {
            return <li>{ind}</li>;
          })}
        </ul>
        <h1 className="text-2xl mt-3">Instructions</h1>
        <ul className="mt-1">
          {singleRecipe.instructions.map((ind) => {
            return <li>{ind}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default RecipeDetails;
