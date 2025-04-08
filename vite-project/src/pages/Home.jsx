import "../css/Home.css";
import CatImg from "../components/CatImg";
import { useState, useEffect } from "react";
import { getRandomCatImg } from "../services/api";
import RandBtn from "../components/RandBtn";

function Home() {
  // useState hook
  const [searchQuery, setSearchQuery] = useState("");
  const [catImgs, setCatImg] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadRandomCat = async () => {
    try {
      setLoading(true);
      const randomCat = await getRandomCatImg();
      setCatImg([randomCat]);
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
  });
  return (
    <div className="home">
      <div>
        <button type="button" onClick={loadRandomCat}>
          Random Cat
        </button>
      </div>
      <div>
        {catImgs.map((catImg, idx) => (
          <CatImg catImg={catImg} key={idx} />
        ))}
      </div>
    </div>
  );
}
export default Home;
