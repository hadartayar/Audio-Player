import React, { useEffect, useState } from "react";
import { ImPlay2 as Play, ImPause as Pause, ImStop as Stop } from "react-icons/im";
import { MdRepeat as NoLoop, MdRepeatOn as Loop } from "react-icons/md";
import { Button, Checkbox } from "@mui/material";

export default function ButtonsPanel({
  isPlaying,
  playPause,
  isStopped,
  isLooping,
  loop }) {

  const btnStyle = {
    backgroundColor: "white",
    fontSize: 50,
    color: "black"
  }
  return (
    <div style= {{ display: "flex",justifyContent: "center", width: "100%"}}>
      {isPlaying ? (
        <Button
          style={btnStyle}
          onClick={() => playPause(false)}
        >
          <Pause />
        </Button>
      ) : (
        <Button
          style={btnStyle}
          onClick={() => playPause(true)}
        >
          <Play />
        </Button>
      )}

      <Button
        style={btnStyle}
        onClick={() => isStopped(true)}
      >
        <Stop />
      </Button>

      {isLooping ? (
        <Button
          style={btnStyle}
          onClick={() => loop(false)}
        >
          <Loop />
        </Button>
      ) : (
        <Button
          style={btnStyle}
          onClick={() => loop(true)}
        >
          <NoLoop />
        </Button>
      )}
    </div>
  )
}
