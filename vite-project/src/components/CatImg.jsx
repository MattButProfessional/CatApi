import "../css/CatImg.css";

function CatImg({ catImg, catImgId, catImgTags }) {
  return (
    <div>
      <img src={catImg} alt="Random Cat" />
      <div>
        <div>Id: {catImgId}</div>
        <div>Tags: {catImgTags}</div>
      </div>
    </div>
  );
}

export default CatImg;
