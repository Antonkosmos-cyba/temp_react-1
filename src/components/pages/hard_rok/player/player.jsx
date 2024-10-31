import wsogg from "../ws.ogg";
import wswebp from "../ws.webp";

export default function Player() {
  return (
    <div className="component">
      <img className="musicCover" src={wswebp} />
      <div>
        <h3 className="title">Flesh Blood</h3>
        <p className="subTitle">White Snake</p>
      </div>
      <div>
        <audio className="antona" src={wsogg} controls></audio>
      </div>
    </div>
  );
}
