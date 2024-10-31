import metal1_ogg from "../Ram.ogg";
import metal2_web from "../Ramstein_1.webp";

export default function PlayerD() {
  return (
    <div className="component">
      <img className="musicCover" src={metal2_web} />
      <div>
        <h3 className="title">Du Hast</h3>
        <p className="subTitle">Rammstein</p>
      </div>
      <div>
        <audio className="antona" src={metal1_ogg} controls></audio>
      </div>
    </div>
  );
}
