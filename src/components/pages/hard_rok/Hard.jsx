import React from "react";
import "./hard.css";
import "./player/player.css";
import Player from "./player/player";
import Player2 from "./player/player_2";

function Hard() {
  return (
    <div className="hard">
      <Player />
      <Player2 />
    </div>
  );
}

export default Hard;
