import de_ogg from "../De.ogg";
import lor_web from "../LornaShore.webp";

export default function Player() {
  return (
    <div className="component">
      <img className="musicCover" src={lor_web} />
      <div>
        <h3 className="title">Death Portrait</h3>
        <p className="subTitle">Lorna Shore</p>
      </div>
      <div>
        <audio className="antona" src={de_ogg} controls></audio>
      </div>
    </div>
  );
}
