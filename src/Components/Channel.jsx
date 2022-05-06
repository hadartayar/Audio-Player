import React, { useEffect, useState, useRef } from "react";
import { ImVolumeMute2 as Mute, ImVolumeMedium as Unmute } from "react-icons/im";
import { Checkbox, formControlLabelClasses } from "@mui/material";
import "../channelStyle.css";

export default function Channel(props) {
  const [isMute, setMute] = useState(true);
  const audioRef = useRef(new Audio(props.audio));

  useEffect(() => {
    if (props.isPlaying) {
      audioRef.current.play();
      updateValue();
    }
    else {
      audioRef.current.pause();
    }
  }, [props.isPlaying], [props.currentTime]);

  // useEffect(() => {
  //   updateValue();
  // }, [props.currentTime]);

  const updateValue =() => {
    console.log("CurrentTime Channel: " ,props.currentTime);    
    audioRef.current.currentTime = props.currentTime;
  }

  useEffect(() => {
    if (props.isStopped) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [props.isStopped]);

  useEffect(() => {
    const x = playFromStart.bind({ isLooping: props.isLooping });
    audioRef.current.addEventListener("ended", x, false);

    return () => {
      audioRef.current.removeEventListener("ended", x, false);
    }
  }, [props.isLooping]);

  const playFromStart = function () {
    audioRef.current.currentTime = 0;
    props.cursor(0);
    if (this.isLooping) {
      audioRef.current.play();
    } else {
      props.playPause(false);
    }
  }

  const handleMuteClick = () => {
    setMute(prevState => { return !prevState; });
    audioRef.current.muted = isMute;
  };

  return (
    <div>
      <div className="innerDiv" style={{ backgroundColor: props.color }}>
        <div></div>
        <div style={{ backgroundColor: props.color }} >
          <h4 >{props.soundName}</h4>
        </div>
        <Checkbox
          onClick={handleMuteClick}
          checked={isMute}
          icon={<Mute style={{ color: "black" }} />}
          checkedIcon={<Unmute style={{ color: "black" }} />} />
      </div>
    </div>
  )
}
