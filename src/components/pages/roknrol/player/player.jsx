import Foto_rokn_elwebp from "../Elvis.webp";
import Muzik1_rokn_elogg from "../Elvis.ogg";

export default function Player() {
  return (
    <div className="component">
      <img className="musicCover" src={Foto_rokn_elwebp} />
      <div>
        <h3 className="title">A big hunk o' love</h3>
        <h3 className="subTitle">Elvis Presley</h3>
      </div>
      <div>
        <audio src={Muzik1_rokn_elogg} controls></audio>
      </div>
    </div>
  );
}
