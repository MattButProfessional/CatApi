import "../css/Home.css";
import CatImg from "../components/CatImg";
import CatInfo from "../components/CatInfo";
import { useState, useEffect } from "react";
import { getRandomCatImg, getRandomCatInfo } from "../services/api";
import RandBtn from "../components/RandBtn";

function Home() {
  const [catImg, setCatImg] = useState(null);
  const [catInfo, setCatInfo] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadRandomCat = async () => {
    try {
      setLoading(true);
      const randomCat = await getRandomCatImg();
      setCatImg(randomCat);
      const randomCatInfo = await getRandomCatInfo();
      setCatInfo(randomCatInfo);
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
        {catImg && <CatImg catImg={catImg} />}
      </div>
      <div>{catInfo && <CatInfo catInfo={catInfo} />}</div>
    </div>
  );
}

export default Home;
