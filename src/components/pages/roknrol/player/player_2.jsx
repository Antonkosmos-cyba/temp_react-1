import beat_ogg from "../Beat.ogg";
import beat_webp from "../Beatles2.webp";

export default function PlayerD() {
  return (
    <div className="component">
      <img className="musicCover" src={beat_webp} />
      <div>
        <h3 className="title">Ob-La-Di, Ob-La-Da</h3>
        <h3 className="subTitle">Beatles</h3>
      </div>
      <div>
        <audio className="antona" src={beat_ogg} controls></audio>
      </div>
    </div>
  );
}
