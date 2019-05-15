import React from "react";
import styling from './common.module.scss'

const Label = (props) => {
  return (
   <span className={styling.Label} style={styling}>{props.label}</span>
  )
}

export default Label;