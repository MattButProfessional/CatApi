const BASE_URL = "https://cataas.com/api/cats?tags=";

export const getRandomCatImg = async () => {
  try {
    const res = await fetch(`${BASE_URL}&skip=0&limit=1500`);
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await res.json();
    console.log("Raw API data:", data);
    const cat = data[Math.floor(Math.random() * 1500)];
    return cat;
  } catch (err) {
    console.error("Error fetching the cat image:", err);
    return null;
  }
};
export const searchCats = async () => {
  const response = await fetch(`${BASE_URL}${gif}${tags}&skip=0&limit=1500`);
  const data = await response.json();
  return data.results;
};
