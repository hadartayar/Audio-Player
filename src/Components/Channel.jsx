import React, { useEffect, useState, useRef } from "react";
import { ImVolumeMute2 as Mute, ImVolumeMedium as Unmute } from "react-icons/im";
import { Checkbox } from "@mui/material";

export default function Channel(props) {
  const [isMute, setMute] = useState(true);
  const audioRef = useRef(new Audio(props.audio));

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
    const x = playFromStart.bind({isLooping: props.isLooping});
    audioRef.current.addEventListener("ended", x, false);

    return () => {
      audioRef.current.removeEventListener("ended", x, false);
    }
  }, [props.isLooping]);

  const playFromStart = function() {
    console.log(this.isLooping);
    audioRef.current.currentTime = 0;
    if(this.isLooping){
      audioRef.current.play();
    } else {
      props.playPause(false);
    }
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
