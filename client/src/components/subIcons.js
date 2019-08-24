import React from "react";
import "./subIcons.css";

class subIcons extends React.Component {
  render() {
    return (
      <div id="subIcons" className="container">
      <div className="Row">
        <a className="front-page-sub-icons badge badge-pill badge-danger col-6" id="sub-icon-left" href="#MTD">
          <h4>Meet the Developers</h4>
          <p>Meet the team that brought the whole game to life.</p>
        </a>
        <a className="front-page-sub-icons badge badge-pill badge-danger col-6" id="sub-icon-right" href="#whatIsBodee">
          <h4>What is Bodeepong?</h4>
          <p>A description of what Bodeepong is.</p>
        </a>
        </div>
      </div>
    );
  }
}

export default subIcons;
