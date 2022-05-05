import React, { useEffect } from "react";
import Channel from './Channel';
import { sounds } from "../assets/sounds";
// import { colors } from "../Help/colors";

export default function Channels(props) {    
  useEffect(() => {
    // const file = require(`./src/Sounds`);
    // setSoundFile(file);
    // console.log(soundFile)
    //soundtracks();
  }, []);

  const soundtracks = sounds.map((fileName, index) => {
    return (
      <Channel
        key={fileName}
        class={props.class}
        //color={colors[index]}
        soundName={fileName}
        // audioRef={ref}
        soundSrc={`${process.env.PUBLIC_URL}/assets/${fileName}.mp3`}
        isPlaying={props.isPlaying}
        isStopped={props.isStopped}
        isLooping={props.isLooping}
      />
    );
  });

  return (
    <div>{soundtracks}</div>
  )
}
