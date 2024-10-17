import React from "react";
import "./roknrol.css";
import "../player.css";
import Player from "./player/player";
import Player2 from "./player/player_2";

function Roknrol() {
  return (
    <div className="rokn">
      <Player />
      <Player2 />
    </div>
  );
}

export default Roknrol;
