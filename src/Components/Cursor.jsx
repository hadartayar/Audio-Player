import React from 'react'

export default function Cursor(props) {
  return (
    <div>
      <input
        type="range"
        value={props.value}
        step="1"
        min="0"
        max="17"
      //onChange={()=> handleChange()}
      //onChange={(e) => {console.log(e.target.value); setTrackProgress({value: e.target.value})}}


      // className="progress"
      // onChange={(e) => onScrub(e.target.value)}
      // onMouseUp={onScrubEnd}
      // onKeyUp={onScrubEnd}
      style={{ background: "grey", width: "100%" }}
      />
    </div>
  )
}
