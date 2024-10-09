import React from "react";
import "./tresh.css";
import "./player/player.css";
import Player from "./player/player";
import Player2 from "./player/player_2";

function Trash() {
  return (
    <div className="tresh">
      <Player />
      <Player2 />
    </div>
  );
}

export default Trash;
