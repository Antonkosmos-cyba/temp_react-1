import React from "react";
import "./roknrol.css";
import "../player.css";
import Player from "./player/player";
import PlayerD from "./player/player_2";

function Roknrol() {
  return (
    <div className="rokn">
      <Player />
      <PlayerD />
    </div>
  );
}

export default Roknrol;
