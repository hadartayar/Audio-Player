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
        onChange={(e) => props.onChange(e.target.value)}
        style={{ width: "100%" }}
      />
    </div>
  )
}
