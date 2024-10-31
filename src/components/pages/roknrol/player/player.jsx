import elwebp from "../Elvis.webp";
import elogg from "../Elvis.ogg";

export default function Player() {
  return (
    <div className="component">
      <img className="musicCover" src={elwebp} />
      <div>
        <h3 className="title">A big hunk o' love</h3>
        <h3 className="subTitle">Elvis Presley</h3>
      </div>
      <div>
        <audio className="antona" src={elogg} controls></audio>
      </div>
    </div>
  );
}
