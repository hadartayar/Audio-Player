import React, { useState, useEffect, useRef } from "react";
import ButtonsPanel from "./ButtonsPanel";
// import Channels from "./Channels";
// import cali from "./assets/cali-wataboi.mp3";

export default function Hadar(tracks) {
  //const { title, artist, color, image, audioSrc } = tracks[0];
  const [isPlaying, setIsPlaying] = useState(false);
  const [isStopped, setIsStopped] = useState(false);
  const [isLooping, setIsLooping] = useState(false);


  const audio = require("././assets/DRUMS.mp3");
  // Refs
  const audioRef = useRef(new Audio(audio));
  const intervalRef = useRef();


  useEffect(() => {
    isPlaying ? audioRef.current.play() : audioRef.current.pause();
    setIsStopped(false);
  }, [isPlaying]);

  useEffect(() => {
    if (isStopped) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
    else
      setIsStopped(false);
  }, [isStopped]);


  useEffect(() => {
    if (isLooping) {
      audioRef.current.addEventListener('ended', function () {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
        console.log("In event listener")
      }, false); 
       console.log("Loop")
    }
    else{
      setIsLooping(false);
      console.log("Not Loop")
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
      {/* <Channels/> */}
      
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
