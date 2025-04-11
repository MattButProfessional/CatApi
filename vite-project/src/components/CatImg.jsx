import "../css/CatImg.css";

function CatImg({ catImg, catImgId, catImgTags }) {
  return (
    <div>
      <img src={catImg} alt="Your Random Cat Did Not Load" />
      <div className="InfoText">
        <div className="InfoText">Id: {catImgId}</div>
        <div className="InfoText">Tags: {catImgTags}</div>
      </div>
    </div>
  );
}

export default CatImg;
