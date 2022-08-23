import React from "react";
import { Outlet, Link } from "react-router-dom";
import {BsCheck2} from '../../node_modules/react-icons/bs';
import {HiOutlineArrowNarrowRight} from '../../node_modules/react-icons/hi';
import Sectionheader from "../component/Sectionheader";
import Service from "../component/Service";
import { FaBullhorn } from "react-icons/fa";
import {CgWebsite} from "react-icons/cg";
import {FaLaptopCode} from 'react-icons/fa';
import {MdOutlineScreenSearchDesktop} from "react-icons/md"; 
import S2 from "../img/s2.png";
import Mainpic from '../img/main-pic.png';
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
import Image32 from '../img/3-2.png';
import Image42 from "../img/4-2.png";

const Home = () => {
  return (
    <>
      <section className="home-banner">
        <div className="hero-banner banner-bg2">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-12">
                    <div className="hero-main-banner-content text-left">
                      <span className="sub-title">Your brand, promoted</span>
                      <h1>Creative solutions to improve your business!</h1>
                      <p className="az_paragraph">We work hand-in-hand with industry-leading brands to help redefine the possibilities and potential of digital engagements.</p>
                      <Link to="/about" href="" className="azBtn in_right">About Us<i className="amaz-arrow"><HiOutlineArrowNarrowRight /></i></Link>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="hero-main-banner-image move_anim">
                      <img src={Mainpic} className="wow fadeInUp animated" alt="main-pic"  />
                    </div>
                  </div>
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
      </section>
      <section className="home-about-us">
      <div className="container">
        <div className="SecLayerimg move_anim clearfix">
        <img src={S2 } alt="Amazon Softwares" />
        </div>
        <div className="home-about-us-content_wrapper">
          <div className="row">
            <div className="col-7">
            <Sectionheader
            subTitle={"About Us"}
            secTitle={"We Are Proffesional Great Digital Agency!"}
            paragraph={"Your ton the other hand, we denounce with righteous indignation and dislike men who are so beguiled"}
             />
            <div className="listItemWrapper">
            <ul className="listItem">
<li>
<i className="amaz-check"><BsCheck2 /></i>
Research your niche and competitors. </li>
<li>
<i className="amaz-check"><BsCheck2 /></i>
Create content that gets your business found online. </li>
<li>
<i className="amaz-check"><BsCheck2 /></i>
Increase your online presence.Drive organic traffic and lead generation. </li>
</ul>
</div>
<Link to="/about" className="azBtn in_right">About Us<i className="amaz-arrow"><HiOutlineArrowNarrowRight /></i></Link>
            </div>
           
            <div className="col-5">
            <div className="abImg ">
<img src={Image32} alt="Home One Banner" />
</div>
            </div>

          </div>
          </div>
        </div>
        
      </section>

      <section className="homeService text-center mt-5 mb-5">
      <div className="container">
      <Sectionheader
            subTitle={"WHAT WE PROVIDE"}
            secTitle={"End to end solutions for promoting your business"}
            paragraph={"We’re not a regular agency. We’re a full-service digital marketing agency who focus on targeted and consistent messages"}
             />
    </div>
    <div className="container-fluid text-left">
      <div className="row">
        <div className="col-md-3">
        <Service 
            icon={<CgWebsite />}
            heading={"Web Design"}
            description={"Digital marketing reaches targeted audience in an affordable and measurable way"}
            sericeLink={"/about"}
             />
        </div>
        <div className="col-md-3">
        <Service 
            icon={<FaLaptopCode />}
            heading={"Web Development"}
            description={"Digital marketing reaches targeted audience in an affordable and measurable way"}
            sericeLink={"/about"}
             />
        </div>
        <div className="col-md-3">
        <Service 
            icon={<FaBullhorn />}
            heading={"Digital Marketing"}
            description={"Digital marketing reaches targeted audience in an affordable and measurable way"}
            sericeLink={"/about"}
             />
        </div>
        <div className="col-md-3">
        <Service 
            icon={<MdOutlineScreenSearchDesktop />}
            heading={"SEO & Marketing"}
            description={"Digital marketing reaches targeted audience in an affordable and measurable way"}
            sericeLink={"/about"}
             />
        </div>
      </div>
    </div>
      </section>
    
    <section className="ourProgress">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
<h2 className="secTitle">We Develop & Create Digital Future</h2>
<p className="az_paragraph">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form</p>
<div className="progressBar">
<div className="progressBarInfo">
  <div className="progressName">Web Development</div>
  <div className="progressNumber">25%</div>
</div>
<div className="progress">

  <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div className="progressBarInfo">
  <div className="progressName">Web Development</div>
  <div className="progressNumber">25%</div>
</div>
<div className="progress">
  <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div className="progressBarInfo">
  <div className="progressName">Web Development</div>
  <div className="progressNumber">25%</div>
</div>
<div className="progress">
  <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div className="progressBarInfo">
  <div className="progressName">Web Development</div>
  <div className="progressNumber">25%</div>
</div>
<div className="progress">
  <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: "100%"}}  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
</div>
          </div>

          <div className="col-md-6">
            <img src={Image42} />
          </div>
        </div>
      </div>
    </section>

    </>
  )
}

export default Home;