import acdc_ogg from "../acdc.ogg";
import acdcc_webp from "../acdc.webp";

export default function PlayerD() {
  return (
    <div className="component">
      <img className="musicCover" src={acdcc_webp} />
      <div>
        <h3 className="title">Back in Black</h3>
        <p className="subTitle">ACDC</p>
      </div>
      <div>
        <audio className="antona" src={acdc_ogg} controls></audio>
      </div>
    </div>
  );
}
