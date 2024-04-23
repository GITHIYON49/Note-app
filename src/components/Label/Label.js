import React from "react";
import "./style.scss";

function Label({ names }) {
  return <label className="input-label"> {names} </label>;
}

export default Label;
