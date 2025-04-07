import "../css/Home.css";
import CatImg from "../components/CatImg";
import { useState, useEffect } from "react";
import { getRandomCatImg } from "../services/api";

function Home() {
  // useState hook
  const [searchQuery, setSearchQuery] = useState("");
  const [catImgs, setCatImg] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadRandomCat = async () => {
      try {
        setLoading(true);
        const randomCat = await getRandomCatImg();
        setCatImg(randomCat);
        console.log(catImgs);
        setError(null);
      } catch (err) {
        console.error(err);
        setError("Failed to load cat");
      } finally {
        setLoading(false);
      }
    };

    loadRandomCat();
  }, []);
  return (
    <div className="home">
      <button>Random Cat</button>
      <div>
        {catImgs.map((catImg, idx) => (
          <CatImg catImg={catImg} key={idx} />
        ))}
      </div>
    </div>
  );
}
export default Home;
