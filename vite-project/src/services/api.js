const BASE_URL = "https://cataas.com";

export const getRandomCatImg = async () => {
  const response = await fetch(`${BASE_URL}/cat`);
  const data = await response.json();
  return data.results;
};
