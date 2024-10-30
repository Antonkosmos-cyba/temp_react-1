import muz_hard2_acdc_ogg from "../acdc.ogg";
import foto_hard2_ws_acdccwebp from "../acdc.webp";

export default function PlayerD() {
  return (
    <div className="component">
      <img className="musicCover" src={foto_hard2_ws_acdccwebp} />
      <div>
        <h3 className="title">Back in Black</h3>
        <p className="subTitle">ACDC</p>
      </div>
      <div>
        <audio className="antona" src={muz_hard2_acdc_ogg} controls></audio>
      </div>
    </div>
  );
}
