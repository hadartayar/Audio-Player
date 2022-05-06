import React, { useState, useEffect, useRef } from "react";
import ButtonsPanel from "./ButtonsPanel";
import Channels from "./Channels";
import Cursor from "./Cursor";

export default function Hadar({ tracks }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isStopped, setIsStopped] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  const [trackProgress, setTrackProgress] = useState(0);

  useEffect(() => {
    if (isPlaying) {
      // const input = document.querySelector('input');
      // input.addEventListener('change', updateValue);
      const interval = setInterval(() => setTrackProgress((oldTrackProgress) => {
        console.log(oldTrackProgress);
        return oldTrackProgress + 1;
      }), 1000);
      return _ => clearInterval(interval);
    }
    setIsStopped(false);
  }, [isPlaying], [trackProgress]);


  useEffect(() => {
    if (isStopped) {
      setIsPlaying(false);
      setTrackProgress(0);
    }
  }, [isStopped]);

  const onScrub = (value) => {
    console.log("VAL:", value * 1)
    setTrackProgress(value * 1);
  };

  return (
    <div>
      <Cursor
        value={trackProgress}
        onChange={onScrub}
      />

      <Channels
        tracks={tracks}
        isPlaying={isPlaying}
        isStopped={isStopped}
        isLooping={isLooping}
        playPause={setIsPlaying}
        cursor={setTrackProgress}
        currentTime={trackProgress}
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
