import React from "react";
import "./meetTheDeveloper.css";
class MeetTheDeveloper extends React.Component {
    render() {
        return (
            
            <div className="container" id="MTD">
            <h2 className="heading">Meet The Developers</h2>
                <div className="card row badge-pill devs" >
                    <div className="col"></div>
                    <div className="card-body col ">
                        <h2 className="card-title">Yubel Ribot</h2>
                        <h4 className="card-subtitle mb-2 text-muted">Front-End</h4>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href="https://github.com/yubel26" className="card-link">GitHub</a>
                        <a href="www.linkedin.com/in/yubelribot26" className="card-link">Linkedin</a>
                    </div>
                    <div className="col"></div>

                </div>

                <div className="card row badge-pill devs dev2" >
                    <div className="col"></div>

                    <div className="card-body col">
                        <h2 className="card-title">Francisco Linares</h2>
                        <h4 className="card-subtitle mb-2 text-muted">Networking/Game Designer</h4>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href="https://github.com/frankjlinares" className="card-link">GitHub</a>
                        <a href="#" className="card-link">Linkedin</a>
                    </div>
                    <div className="col"></div>

                </div>

                <div className="card row badge-pill devs" >
                    <div className="col"></div>

                    <div className="card-body col">
                        <h2 className="card-title">Jordan Miller</h2>
                        <h4 className="card-subtitle mb-2 text-muted">Game Designer </h4>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href="https://github.com/nanofuxion" className="card-link">GitHub</a>
                        <a href="https://www.linkedin.com/in/jordan-miller-6b720a83/" className="card-link">Linkedin</a>
                    </div>
                    <div className="col"></div>

                </div>
            </div>

        );
    }
}

export default MeetTheDeveloper;
