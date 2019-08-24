import React from "react";
import "./howToPlay.css"
class howToPlay extends React.Component {
  render() {
    return (
      <div className="chapter" id="howToPlay">
        <h2 className="heading">How to play</h2>
        <p className="chapterInfo">
          BodeePong is an old style arcade game that  converts your hand movements into the movement of the paddle.
         The rules are simple, by moving your hand you are therfore controlling the paddle until one of the players misses the ball. The player that misses the ball will lose, making the game restart.
        </p>
      </div>
    );
  }
}

export default howToPlay;
