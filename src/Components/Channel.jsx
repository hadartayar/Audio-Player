import React, { useEffect, useState, useRef } from "react";
import {
  ImVolumeMute2 as Mute,
  ImVolumeMedium as Unmute,
} from "react-icons/im";
import { Checkbox, formControlLabelClasses } from "@mui/material";
import "../channelStyle.css";

export default function Channel(props) {
  const [isMute, setMute] = useState(true);
  const audioRef = useRef(new Audio(props.audio));

  //Play/Pause audioRef
  useEffect(() => {
    props.isPlaying ? audioRef.current.play() : audioRef.current.pause();
  }, [props.isPlaying]);

  //Update the audio current time when the cursor change - Bonus
  useEffect(() => {
    audioRef.current.currentTime = props.dropedValue;
  }, [props.dropedValue]);

  //Stop audioRef
  useEffect(() => {
    if (props.isStopped) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [props.isStopped]);

  //Handle Loop case
  useEffect(() => {
    const x = playFromStart.bind({ isLooping: props.isLooping });
    audioRef.current.addEventListener("ended", x, false);

    return () => {
      audioRef.current.removeEventListener("ended", x, false);
    };
  }, [props.isLooping]);

  const playFromStart = function () {
    audioRef.current.currentTime = 0;
    props.cursor(0);
    this.isLooping ? audioRef.current.play() : props.playPause(false);
  };

  //Handle mute toggle button
  const handleMuteClick = () => {
    setMute((prevState) => {
      return !prevState;
    });
    audioRef.current.muted = isMute;
  };

  return (
    <div>
      <div className="innerDiv" style={{ backgroundColor: props.color }}>
        <div></div>
        <div style={{ backgroundColor: props.color }}>
          <h4>{props.soundName}</h4>
        </div>
        <Checkbox
          onClick={handleMuteClick}
          checked={isMute}
          icon={<Mute style={{ color: "black" }} />}
          checkedIcon={<Unmute style={{ color: "black" }} />}
        />
      </div>
    </div>
  );
}
