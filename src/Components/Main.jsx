import React, { useState, useEffect, useRef } from "react";
import ButtonsPanel from "./ButtonsPanel";
import Channels from "./Channels";
import Cursor from "./Cursor";

export default function Main({ tracks }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isStopped, setIsStopped] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  const [trackProgress, setTrackProgress] = useState(0);


  useEffect(() => {
    if (isPlaying) {
      /////////
      if (trackProgress <= 17) {
        const interval = setInterval(() => setTrackProgress((oldTrackProgress) => oldTrackProgress + 1), 1000);
        return _ => clearInterval(interval);
      }
      else {
        setTrackProgress(0);  /////////
      }
    }
    setIsStopped(false);
  }, [isPlaying]);
 
  useEffect(() => {
    if (isStopped) {
      setIsPlaying(false);
      setTrackProgress(0);
    }
    else {
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
      <Cursor
        value={trackProgress}
      />

      <Channels
        tracks={tracks}
        isPlaying={isPlaying}
        isStopped={isStopped}
        isLooping={isLooping}
        playPause={setIsPlaying}
        cursor= {setTrackProgress}
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
