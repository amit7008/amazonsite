import React from "react";
import Shape1 from "../img/1.png";
import Shape2 from "../img/2.svg";
import Shape3 from "../img/3.svg";
import Shape4 from "../img/4.png";
import Shape5 from "../img/5.png";
import Shape6 from "../img/6.png";
import Shape7 from "../img/7.png";
import Shape8 from "../img/8.png";
import Shape9 from "../img/9.png";
import Shape10 from "../img/10.png";

const Pageheader = (props) => {
    return (
        <>
            <div className="page-title-area page-title-bg1">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="page-title-content">
                                <h2>{props.title}</h2>
                                <ul>
                                    <li><a href="">Home</a></li>
                                    <li>{props.title}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape-img1">
            <img src={Shape1} alt="Shape Image" />
          </div>
          <div className="shape-img2">
            <img src={Shape2} alt="Shape Image" />
          </div>
          <div className="shape-img3">
            <img src={Shape3} alt="Shape Image" />
          </div>
          <div className="shape-img4">
            <img src={ Shape4 } alt="Shape Image" />
          </div>
          <div className="shape-img5">
            <img src={ Shape5 } alt="Shape Image" />
          </div>
          <div className="shape-img6">
            <img src={Shape6} alt="Shape Image" />
          </div>
          <div className="shape-img7">
            <img src={ Shape7 } alt="Shape Image" />
          </div>
          <div className="shape-img8">
            <img src={ Shape8 } alt="Shape Image" />
          </div>
          <div className="shape-img9">
            <img src={ Shape9 } alt="Shape Image" />
          </div>
          <div className="shape-img10">
            <img src={ Shape10 } alt="Shape Image" />
          </div>
            </div>
        </>
    )
}

export default Pageheader