import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen bg-zinc-900 flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl text-white font-bold">
        Click to explore recipes 
      </h1>
      <Link href={"/recipe-list"} className="p-4 bg-blue-700 text-white font-bold rounded-sm hover:bg-blue-900 transition-all">Explore Recipes</Link>
    </div>
  );
}
