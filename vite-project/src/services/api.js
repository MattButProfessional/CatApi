const BASE_URL = "https://cataas.com/api/cats?tags=&skip=0&limit=1";

export const getRandomCatImg = async () => {
  const response = await fetch(`${BASE_URL}`);
  const data = await response.json();
  //console.log(data);
  return data;
};
