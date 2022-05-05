import React, { useEffect, useState } from "react";
import { ImPlay3 as Play, ImPause2 as Pause, ImStop2 as Stop, ImLoop as Loop } from "react-icons/im";
import { Button, Checkbox } from "@mui/material";

export default function ButtonsPanel({
  isPlaying,
  playPause,
  isStopped,
  isLooping,
  loop}) {

  return (
    <div>
      {/* <input
          type="range"
          value={trackProgress}
          step="1"
          min="0"
          max={duration ? duration : `${duration}`}
          className="progress"
          onChange={(e) => onScrub(e.target.value)}
          onMouseUp={onScrubEnd}
          onKeyUp={onScrubEnd}
          style={{ background: trackStyling }}
        /> */}

      {isPlaying ? (
        <button
          type="button"
          className="pause"
          onClick={() => playPause(false)}
          aria-label="Pause"
        >
          <Pause />
        </button>
      ) : (
        <button
          type="button"
          className="play"
          onClick={() => playPause(true)}
          aria-label="Play"
        >
          <Play />
        </button>
      )}

      <button
        type="button"
        className="prev"
        aria-label="Previous"
        onClick={() => isStopped(true)}
      >
        <Stop />
      </button>

      <button
        type="button"
        className="next"
        aria-label="Next"
        onClick={() => loop(!isLooping)}
      >
        <Loop />
      </button>
    </div>
  )
}
