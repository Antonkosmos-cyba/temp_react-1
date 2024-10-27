import React from "react";
import "./tresh.css";
import "../player.css";
import Player from "./player/player";
import PlayerD from "./player/player_2";

function Trash() {
  return (
    <div className="tresh">
      <Player />
      <PlayerD />
    </div>
  );
}

export default Trash;
