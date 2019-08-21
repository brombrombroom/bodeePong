import React from "react";

class subIcons extends React.Component {
  render() {
    return (
      <div id="subIcons">
        <a className="front-page-sub-icons" id="sub-icon-left" href>
          <h4>Meet the Developers</h4>
          <p>Meet the team that brought the whole game to life.</p>
        </a>
        <a className="front-page-sub-icons" id="sub-icon-right" href>
          <h4>What is Bodeepong?</h4>
          <p>A discription of what Bodeepong is.</p>
        </a>
      </div>
    );
  }
}

export default subIcons;
