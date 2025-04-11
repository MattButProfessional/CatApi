import "../css/Home.css";
import CatImg from "../components/CatImg";
import { useState, useEffect } from "react";
import { getRandomCatImg } from "../services/api";

function Home() {
  const [catImg, setCatImg] = useState(null);
  const [catImgId, setCatImgId] = useState(null);
  const [catImgTags, setCatImgTags] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadRandomCat = async () => {
    try {
      setLoading(true);
      const randomCat = await getRandomCatImg();
      const randomCatId = randomCat.id;
      const randomCatTags = randomCat.tags;
      if (randomCatTags != "") {
        setCatImgTags(randomCatTags);
      } else {
        setCatImgTags("No Tags");
      }
      const imageUrl = `https://cataas.com/cat/${randomCatId}?type=medium`;
      console.clear();
      console.log("🐱 Image URL:", imageUrl);
      console.log("🐱 Image Id: ", randomCatId);
      console.log("🐱 Image Tags: ", randomCatTags);
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
      <div className="CatFullCard">
        <button type="button" onClick={loadRandomCat}>
          Random Cat
        </button>
      </div>
      <div className="CatFullCard">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {catImg && (
          <CatImg catImg={catImg} catImgId={catImgId} catImgTags={catImgTags} />
        )}
      </div>
    </div>
  );
}

export default Home;
