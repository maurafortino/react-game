import React from "react";
import "./style.css";

function Col(props) {
  return <div className="col-4">{props.children}</div>;
}

export default Col;
