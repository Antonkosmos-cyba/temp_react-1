// import React,{ useState } from "react";
// import ReactAudioPlayer from "react-audio-player";

import { PrimeReactProvider, PrimeReactContext } from "primereact/api";

import { Button } from "primereact/button";

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
        {/* <ReactAudioPlayer src={wsogg} controls /> */}
        {/* <audio className="antona" src={wsogg} controls></audio> */}
        <audio id="audioPlayer" src={wsogg}></audio>

        <Button icon="pi pi-check" rounded text raised aria-label="Filter" />
        <Button
          icon="pi pi-times"
          rounded
          text
          raised
          severity="danger"
          aria-label="Cancel"
        />
      </div>
    </div>
  );
}
