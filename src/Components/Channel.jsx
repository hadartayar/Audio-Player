import React, { useEffect, useState, useRef } from "react";
import { ImVolumeMute2 as Mute, ImVolumeMedium as Unmute } from "react-icons/im";
import { Checkbox } from "@mui/material";

export default function Channel(props) {
  const [mute, setMute] = useState(false);
  // Refs
  const audioRef = useRef(new Audio(props.audio));
  // const intervalRef = useRef();

  useEffect(() => {
    props.isPlaying ? audioRef.current.play() : audioRef.current.pause();
  }, [props.isPlaying]);

  useEffect(() => {
    if (props.isStopped) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [props.isStopped]);

  useEffect(() => {
    if (props.isLooping) {
      audioRef.current.addEventListener("ended", function () {
          audioRef.current.currentTime = 0;
          audioRef.current.play();
          console.log("In event listener");
        }, false);
      console.log("Loop");
    } else {
      console.log("Not Loop");
    }
  }, [props.isLooping]);

  const handleMuteClick = () => {
    setMute((prevState) => !prevState);
    mute ? (audioRef.current.muted = true) : (audioRef.muted = false);
  };
  
  return (
    <div>
      <div >
        <h5 style={{ backgroundColor: props.color }}>{props.soundName}</h5>
        {/* <Checkbox
          // className={props.class}
          onClick={handleMuteClick}
          checked={mute}
          icon={<Unmute style={{ color: "black" }} />}
          checkedIcon={<Mute style={{ color: "black" }} />} /> */}
      </div>
    </div>
  )
}
