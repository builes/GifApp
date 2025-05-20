import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const handleAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>Buscador de Gifs</h1>

      <AddCategory handleAddCategory={handleAddCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
