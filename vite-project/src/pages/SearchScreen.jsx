import "../css/Home.css";
import { useState, useEffect } from "react";
import { getRandomCatImg } from "../services/api";
import { searchCats } from "../services/api";
import "../css/Search.css";

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
        <div className="searchOption">
          <input
            type="checkbox"
            id="GifCheck"
            name="GifCheck"
            value="Gif"
          ></input>
          <label for="GifCheck"> Gif</label>
        </div>
        <div className="searchOption">
          <label for="ImgSize">Image Size: </label>
          <select name="ImgSize" id="ImgSize">
            <option value="xsmall">Extra Small</option>
            <option value="small">Small</option>
            <option value="medium ">Medium </option>
            <option value="square">Square</option>
          </select>
        </div>
        <div className="searchOption">
          <label for="TextOverlay">(Optional) Text Overlay: </label>
          <input type="text" id="TextOverlay" name="TextOverlay" />
        </div>
        <div className="searchOption">
          <label for="FontSize">(Optional) Font Size: </label>
          <input
            type="number"
            id="FontSize"
            name="FontSize"
            min="0"
            max="10000"
          ></input>
        </div>
        <div className="searchOption">
          <label for="FontColor">(Optional) Font Color: </label>
          <input type="color" id="FontColor" name="FontColor"></input>
        </div>

        {/* <input type="submit"></input> */}
      </form>{" "}
      <button type="button" className="darkBtn" onClick={changeBackground}>
        {isLightMode ? "🌙" : "☀️"}
      </button>
    </div>
  );
}

export default SearchScreen;
