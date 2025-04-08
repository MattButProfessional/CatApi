import "../css/CatImg.css";

function CatImg({ catImg }) {
  return (
    <div>
      <img src={catImg} alt="Random Cat" />
    </div>
  );
}

export default CatImg;
