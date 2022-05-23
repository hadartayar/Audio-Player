import React, { useState, useEffect } from "react";
import Cursor from "./Cursor";
import Channels from "./Channels";
import ButtonsPanel from "./ButtonsPanel";

export default function Main({ tracks }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isStopped, setIsStopped] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  const [trackProgress, setTrackProgress] = useState(0);  //The cursor progress
  const [dropedValue, setDropedValue] = useState(0);  //The cursor progress

  //Handle the play/pause buttons
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => setTrackProgress((oldTrackProgress) => {
        return oldTrackProgress + 1;
      }), 1000);
      return _ => clearInterval(interval);
    }
    setIsStopped(false);
  }, [isPlaying]);

  //Handle the stop button
  useEffect(() => {
    if (isStopped) {
      setIsPlaying(false);
      setTrackProgress(0);
    }
  }, [isStopped]);

  //Handle the drug and drop cursor (Bonus)
  const onChangeCursor = (value) => {
    setDropedValue(value * 1);
    setTrackProgress(value * 1);
  };

  return (
    <div>
      <Cursor
        value={trackProgress}
        onChange={onChangeCursor}
      />

      <Channels
        tracks={tracks}
        isPlaying={isPlaying}
        isStopped={isStopped}
        isLooping={isLooping}
        playPause={setIsPlaying}
        cursor={setTrackProgress}
        dropedValue={dropedValue}
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
