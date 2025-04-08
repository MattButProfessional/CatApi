const BASE_URL = "https://cataas.com/api/cats?tags=&skip=0&limit=1";

export const getRandomCatImg = async () => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    // console.log("API Response:", data);

    // Ensure we have the id to construct the image URL
    if (Array.isArray(data) && data[0]?.id) {
      const catImageUrl = `https://cataas.com/cat/${data[0].id}?type=medium`;
      return catImageUrl;
    } else {
      throw new Error("No cat image ID found");
    }
  } catch (error) {
    console.error("Error fetching the cat image:", error);
    throw error;
  }
};
