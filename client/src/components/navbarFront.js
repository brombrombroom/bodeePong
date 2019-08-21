import React from "react";

class navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="nav-front-page">
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                SignIn
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                SignUP
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                SignOut
              </a>
            </li>
          </ul>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Requierments
                </a>
              </li>
              <div id="frontPage-Logo">
                <a className="navbar-brand" href="forntPage.html">
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
              <li className="nav-item">
                <a className="nav-link" href="#">
                  How To Play
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Play Now
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default navbar;
