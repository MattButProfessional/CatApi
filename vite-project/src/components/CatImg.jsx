import "../css/CatImg.css";

function CatImg({ catImg, catImgId }) {
  return (
    <div>
      <img src={catImg} alt="Random Cat" />
      <div>
        <div>Id: {catImgId}</div>
      </div>
    </div>
  );
}

export default CatImg;
