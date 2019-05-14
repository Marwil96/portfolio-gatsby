import React from "react";

const styling = {
      color: 'white',
      fontSize: 12,
      textTransform: 'uppercase',
      fontWeight: 700,
      fontFamily: 'sans-serif'
  };

const Label = (props) => {
  return (
   <span className="label" style={styling}>{props.label}</span>
  )
}

export default Label;