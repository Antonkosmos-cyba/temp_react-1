import ozu_ogg from "../Ozzy.ogg";
import ozu_webp from "../ozu.webp";

export default function Player() {
  return (
    <div className="component">
      <img className="musicCover" src={ozu_webp} />
      <div>
        <h3 className="title">Iron Head</h3>
        <p className="subTitle">Ozzy Osdourne</p>
      </div>
      <div>
        <audio className="antona" src={ozu_ogg} controls></audio>
      </div>
    </div>
  );
}
