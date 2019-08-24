import React from "react";
import "./navbarFront.css";
class navbar extends React.Component {
  render() {
    return (
      <div className="container mt-0 ">
      <div className="row navRow">
        <div className="col-2"></div>
        <div className="col-8 pb-0 navPad">
          <nav className="navbar navbar-expand-lg navbar-light bg-light nav-whole-bar">
            <div className="nav-front-page">
              
              <div className="collapse navbar-collapse navbar-nav" id="navbarNavDropdown">
              <div className="container ">
              <div className="row ">
                <ul className="navbar-nav">
                  <li className="nav-item col-1 nav-item-home">
                    {/* <a className="nav-link" href="#">
                      Home <span className="sr-only">(current)</span>
                    </a> */}
                  </li>
                  <li className="nav-item col-3">
                    <a className="nav-link" href="#Requierments">
                      Requirements
                </a>
                  </li>
                  {/* <div className='col-1'></div> */}
                  <div className="col-5" id="frontPage-Logo">
                    <a className="navbar-brand" href="/l">
                      Bodeepong
                </a>

                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarNavDropdown"
                      aria-controls="navbarNavDropdown"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon" />
                    </button>
                  </div>

                  <li className="nav-item col-3">
                    <a className="nav-link" href="#howToPlay">
                      How To Play
                </a>
                  </li>

                  {/* <li className="nav-item col-2">
                    <a className="nav-link" href="#">
                      Play Now
                </a>
                  </li> */}
                </ul>
                </div>
                </div>
              </div>
            </div>
          </nav>

        </div>
        <div className="col-2"></div>
        </div>
      </div>
    );
  }
}

export default navbar;
