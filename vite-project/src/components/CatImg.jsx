import { Link } from "react-router-dom";
import "../css/CatImg.css";
import { getRandomCatImg } from "../services/api";

function CatImg({ cat }) {
  return <img src={"https://cataas.com/cat?type=medium"} alt={"cat.id"} />;
}

export default CatImg;
