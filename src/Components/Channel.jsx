import React, { useEffect, useState, useRef } from "react";
import { ImVolumeMute2 as Mute, ImVolumeMedium as Unmute } from "react-icons/im";
import { Checkbox } from "@mui/material";

export default function Channel(props) {
  const [isMute, setMute] = useState(true);
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
    if(props.isLooping){
      audioRef.current.addEventListener("ended", playFromStart, false);
    }

    return () => {
      audioRef.current.removeEventListener("ended", playFromStart, false);
    }
  }, [props.isLooping]);

  const playFromStart = () => {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
  }
  
  const handleMuteClick = () => {
    setMute(prevState => {return !prevState;});
    audioRef.current.muted = isMute;
  };
  
  return (
    <div style={{ display: "flex" }}>
      <h5 style={{ backgroundColor: props.color, width:"100%" }}>{props.soundName}</h5>
      <Checkbox
        onClick={handleMuteClick}
        checked={isMute}
        icon={<Mute style={{ color: "black" }} />}
        checkedIcon={<Unmute style={{ color: "black" }} />} />
    </div>
  )
}
