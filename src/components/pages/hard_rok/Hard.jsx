import React from "react";
import "./hard.css";
import "../player.css";
import Player from "./player/player";
import PlayerD from "./player/player_2";

function Hard() {
  return (
    <div className="hard">
      <Player />
      <PlayerD />
    </div>
  );
}

export default Hard;
