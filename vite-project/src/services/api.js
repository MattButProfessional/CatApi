const BASE_URL = "https://cataas.com/api/cats?tags=&skip=0&limit=1500";

export const getRandomCatImg = async () => {
  try {
    const res = await fetch(BASE_URL);
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await res.json();
    // console.log("Raw API data:", data);

    const catId = data[Math.floor(Math.random() * 1500)].id;

    return catId;
  } catch (err) {
    console.error("Error fetching the cat image:", err);
    return null;
  }
};
