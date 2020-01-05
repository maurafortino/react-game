import React from "react";
import "./style.css";

function Score({score, highScore}) {
  return (
    <div>
      <h5 className="score">Score: {score}</h5>
      <h5 className="score">High Score: {highScore}</h5>
    </div>
  );
}

export default Score;


