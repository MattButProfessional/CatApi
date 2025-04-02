import { Link } from "react-router-dom";
import "../css/CatImg.css";
import { getRandomCatImg } from "../services/api";

function CatImg({ cat }) {
  return <img src={{ getRandomCatImg }} alt={cat.tags} />;
}

export default CatImg;
