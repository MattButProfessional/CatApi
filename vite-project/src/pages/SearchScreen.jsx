import "../css/Home.css";
import CatImg from "../components/CatImg";
import { useState, useEffect } from "react";
import { getRandomCatImg } from "../services/api";
import { searchCats } from "../services/api";

function SearchScreen() {
  const [catImg, setCatImg] = useState(null);
  const [catImgId, setCatImgId] = useState(null);
  const [catImgTags, setCatImgTags] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isLightMode, setIsLightMode] = useState(true);

  const changeBackground = () => {
    const isWhite = !isLightMode;
    document.body.style.backgroundColor = isWhite ? "#ffffff" : "#120017";
    setIsLightMode(isWhite);
  };
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;
    setLoading(true);
    try {
      const searchResults = await searchCats(searchQuery);
      setCatImg(searchResults);
      setError(null);
    } catch (err) {
      console.error(err);
      setError("Failed to search movies");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for Cats..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>{" "}
      <div className="SearchOptions">
        <input
          type="checkbox"
          id="GifCheck"
          name="GifCheck"
          value="Gif"
        ></input>
        <label for="GifCheck">Gif</label>

        <label for="ImgSize">Image Size</label>
        <select name="ImgSize" id="ImgSize">
          <option value="xsmall">Extra Small</option>
          <option value="small">Small</option>
          <option value="medium ">Medium </option>
          <option value="square">Square</option>
        </select>

        <input type="text" />

        <label for="FontSize">Font Size:</label>
        <input
          type="number"
          id="FontSize"
          name="FontSize"
          min="0"
          max="10000"
        ></input>

        <label for="FontColor">Font Color:</label>
        <input
          type="color"
          id="FontColor"
          name="FontColor"
          value="#ff0000"
        ></input>

        {/* <input type="submit"></input> */}
      </div>
      <button type="button" className="darkBtn" onClick={changeBackground}>
        {isLightMode ? "🌙" : "☀️"}
      </button>
    </div>
  );
}

export default SearchScreen;
