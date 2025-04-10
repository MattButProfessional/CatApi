import "../css/Home.css";
import CatImg from "../components/CatImg";
import { useState, useEffect } from "react";
import { getRandomCatImg } from "../services/api";

function Home() {
  const [catImg, setCatImg] = useState(null);
  const [catImgId, setCatImgId] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadRandomCat = async () => {
    try {
      setLoading(true);
      const randomCatId = await getRandomCatImg();
      const imageUrl = `https://cataas.com/cat/${randomCatId}?type=medium`;
      console.clear();
      console.log("🐱 Image URL:", imageUrl);
      setCatImg(imageUrl);
      setCatImgId(randomCatId);
      setError(null);
    } catch (err) {
      console.error(err);
      setError("Failed to load cat");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRandomCat();
  }, []);

  return (
    <div className="home">
      <div>
        <button type="button" onClick={loadRandomCat}>
          Random Cat
        </button>
      </div>
      <div>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {catImg && <CatImg catImg={catImg} catImgId={catImgId} />}
      </div>
    </div>
  );
}

export default Home;
