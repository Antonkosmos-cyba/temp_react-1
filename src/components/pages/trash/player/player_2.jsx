import alo_ogg from "../Alo.ogg";
import tershg_webp from "../treshg.webp";

export default function PlayerD() {
  return (
    <div className="component">
      <img className="musicCover" src={tershg_webp} />
      <div>
        <h3 className="title">Riders Temples</h3>
        <p className="subTitle">Alocer</p>
      </div>

      <div>
        <audio className="antona" src={alo_ogg} controls></audio>
      </div>
    </div>
  );
}
