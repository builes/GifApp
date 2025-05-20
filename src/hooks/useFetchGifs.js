import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getImages = async () => {
      setIsLoading(true); // Asegura que el loading esté true al inicio
      const fetchedImages = await getGifs(category);
      setImages(fetchedImages);
      setIsLoading(false);
    };

    if (category?.trim().length > 0) {
      getImages();
    } else {
      setImages([]);
      setIsLoading(false);
    }
  }, [category]); // Añadir category como dependencia para actualizar si cambia

  return {
    images,
    isLoading,
  };
};
