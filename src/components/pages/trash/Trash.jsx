import React from "react";
import "./metal.css";
import "./player/player.css";
import Player from "./player/player";
import Player2 from "./player/player_2";

function Hard() {
  return (
    <div className="metal">
      <Player />
      <Player2 />
    </div>
  );
}

export default Hard;
