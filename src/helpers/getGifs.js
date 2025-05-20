export const getGifs = async (category) => {
  if (!category || category.trim() === "") return [];

  const apiKey = "vFmbspWscGM5lkzAvEW7f9QlL5CfEFfr";
  const limit = 10;
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(
    category
  )}&limit=${limit}`;

  try {
    const resp = await fetch(url);
    if (!resp.ok) throw new Error("Network response was not ok");

    const { data } = await resp.json();

    const gifs = data.map(({ id, title, images }) => ({
      id,
      title,
      url: images.downsized_medium.url,
    }));

    return gifs;
  } catch (error) {
    console.error("Error fetching gifs:", error);
    return [];
  }
};
