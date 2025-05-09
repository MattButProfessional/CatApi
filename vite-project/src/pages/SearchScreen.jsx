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
      setError("Failed to search cats");
    } finally {
      setLoading(false);
    }
  };

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

    let form = document.getElementById("theSearchFormThing").addEventListener('submit', function(e) {
      e.preventDefault(); 
    let TagSearch = form.elements["search-input"];
      console.log(TagSearch);
    }
  )
    ;
  return (
    <div className="home">
      <form
        id="theSearchFormThing"
        onSubmit={handleSearch}
        className="search-form"
      >
        <input
          type="text"
          placeholder="Search for Cats With Tags..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="searchOptionsGroup">
          <div className="searchOption">
            <label for="GifCheck"> Gif</label>
            <input
              className="checkbox"
              type="checkbox"
              id="GifCheck"
              name="GifCheck"
              value="Gif"
            ></input>
          </div>
          <div className="searchOption">
            <label for="ImgSize">Image Size: </label>
            <select name="ImgSize" id="ImgSize" className="dropDown">
              <option value="xsmall">Extra Small</option>
              <option value="small">Small</option>
              <option selected value="medium">
                Medium
              </option>
              <option value="square">Square</option>
            </select>
          </div>
          <div className="searchOption">
            <label for="TextOverlay">(Optional) Text Overlay: </label>
            <input
              type="text"
              id="TextOverlay"
              name="TextOverlay"
              className="textOverlay"
            />
          </div>
          <div className="searchOption">
            <label for="FontSize">(Optional) Font Size: </label>
            <input
              type="number"
              id="FontSize"
              name="FontSize"
              min="0"
              max="10000"
              className="FontSizeNum"
            ></input>
          </div>
          <div className="searchOption">
            <label for="FontColor">(Optional) Font Color: </label>
            <input
              type="color"
              className="FontColorBox"
              id="FontColor"
              name="FontColor"
            ></input>
          </div>
        </div>
        <input type="submit" className="submit" value={"Search Cats"}></input>
      </form>{" "}
      <button type="button" className="darkBtn" onClick={changeBackground}>
        {isLightMode ? "🌙" : "☀️"}
      </button>
    </div>
  );
}

export default SearchScreen;
