import React, { useState, useEffect, useRef } from "react";
import ButtonsPanel from "./ButtonsPanel";
import Channels from "./Channels";

export default function Hadar({tracks}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isStopped, setIsStopped] = useState(false);
  const [isLooping, setIsLooping] = useState(false);


  const audio = require("../assets/DRUMS.mp3");
  // Refs
  const audioRef = useRef(new Audio(audio));
  const intervalRef = useRef();


  useEffect(() => {
    setIsStopped(false);
  }, [isPlaying]);

  useEffect(() => {
    if (isStopped) {
      setIsPlaying(false);
    }
    else{
      setIsStopped(false);
      setIsLooping(false);
    }
  }, [isStopped]);


  useEffect(() => {
    if (!isLooping) {
      setIsLooping(false);
    }
  }, [isLooping]);


  // const onScrub = (value) => {
  //   // Clear any timers already running
  //   clearInterval(intervalRef.current);
  //   audioRef.current.currentTime = value;
  //   setTrackProgress(audioRef.current.currentTime);
  // };

  // const onScrubEnd = () => {
  //   // If not already playing, start
  //   if (!isPlaying) {
  //     setIsPlaying(true);
  //   }
  //   //startTimer();
  // };

  return (
    <div>
      <Channels
        tracks={tracks}
        isPlaying={isPlaying}
        isStopped={isStopped}
        isLooping={isLooping}
        playPause={setIsPlaying}
      />
      
      <ButtonsPanel
        isPlaying={isPlaying}
        playPause={setIsPlaying}
        isStopped={setIsStopped}
        isLooping={isLooping}
        loop={setIsLooping}
      />
    </div>
  )
}
