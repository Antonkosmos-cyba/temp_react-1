import React from "react";
import "../jquery-3.7.1.min.js";
import "./roknrol";
import "./roknrol.css";

function Roknrol() {
  return (
    <>
      <div classNameName="anta">
        <div className="player paused">
          <div className="album">
            <div className="cover">
              <div>
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/38273/3rdburglar-cover-192.jpg"
                  alt="3rdburglar by Wordburglar"
                />
              </div>
            </div>
          </div>

          <div classNameName="info">
            <div className="time">
              <span className="current-time">0:00</span>
              <span className="progress">
                <span></span>
              </span>
              <span className="duration">0:00</span>
            </div>

            <h1>Drawings With Words</h1>
            <h2>3RDBURGLAR</h2>
          </div>

          <div className="actions">
            <button className="shuffle">
              <div className="arrow"></div>
              <div className="arrow"></div>
            </button>
            <button className="button rw">
              <div className="arrow"></div>
              <div className="arrow"></div>
            </button>
            <button className="button play-pause">
              <div className="arrow"></div>
            </button>
            <button className="button ff">
              <div className="arrow"></div>
              <div className="arrow"></div>
            </button>
            <button className="repeat"></button>
          </div>

          <audio
            prelaod
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/38273/Wordburglar_Drawings_with_Words.mp3"
          ></audio>
        </div>
      </div>
    </>
  );
}

export default Roknrol;
