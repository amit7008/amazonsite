import React from "react";
import {BsCheck2} from '../../node_modules/react-icons/bs';
import Pageheader from "../component/Pageheader";
import Aboutimg1 from "../img/aboutimg1.png";
import Image35 from "../img/3-5.png";
import Sectionheader from "../component/Sectionheader";
const About = () =>{
    return(
    <>
<Pageheader title="About Us" />
<div className="mainContent">
  <section>
<div className="container">
<div className="row align-items-center">
<div className="col-md-7 pe-5">
<Sectionheader
            subTitle={"GET TO KNOW US"}
            secTitle={"WE ARE THE COMPANY YOU’VE BEEN LOOKING FOR…"}
            paragraph={<><p className="az_paragraph">We are the leading Web Design and Development Company in India. We specialize in creating unique websites, custom web applications, corporate branding for both individuals and businesses. We love working closely with companies & individuals who want high quality, websites, online shops, logos, WordPress blogs, and sales pages.</p><p className="az_paragraph"> Whether you need to establish a presence on the net or build an entire net enabled business, we will deliver comprehensive e-services from conceptualization to completion.</p></>}
             />
             </div>
             <div className="col-md-5"><img className="img-fluid" src={Aboutimg1} /></div>
</div>
</div>
</section>
<section className="aboutTwo bgGrey">
<div className="container">
<div className="row align-items-center">
<div className="col-md-5"><img className="img-fluid" src={Image35} /></div>

<div className="col-md-7 ps-5">
<Sectionheader
            subTitle={""}
            secTitle={"We bring exceptional value to clients through lowered development costs."}
            paragraph={<><p className="az_paragraph">With faster project execution (via our development methodology) we guarantee outstanding quality, reliability and customer service.<br/><br/>Our aim is simple: to maximize the return on your investment by increasing sales of your products and/or reducing your business costs.<br/><br/>Amazon Softwares provides comprehensive web-based solutions to the corporate business world and beyond. We specialize in the following:</p>
            <div className="listItemWrapper">
    <ul className="listItem">
    <li><i><BsCheck2 /></i>Website Design.</li>
<li><i><BsCheck2 /></i>Custom Web based Programming.</li>
<li><i><BsCheck2 /></i>E-Commerce store and backend Administrative suits.</li>
<li><i><BsCheck2 /></i>Corporate Identity & Logo design.</li>
</ul>
</div>
            </>}
             />
             </div>

</div>
</div>
</section>




<div className="container">
<p> Our solutions provide lasting value by streamlining operations, maximizing your revenue returns and giving you a niche over your customers.</p>

<p> Amazon Softwares offers a comprehensive bouquet of IT outsourcing services ranging from turn-key development of new web and mobile applications to re-engineering and augmentation of existing legacy applications. Transform your business operations with our technology expertise and scalable IT outsourcing solutions.</p>

<p> The advantages that accrue from IT sources are well understood and appreciated by businesses and organisations across the globe. IT outsourcing services have emerged as one of the most effective and convenient method of reducing overall operational cost of a business while furnishing it with high quality solutions for all the IT requirements.</p>

<p> Amazon Softwares renders a plethora of solutions spanning from in house staff augmentation to IT outsourcing, ecommerce solutions to website development, business process automation to consulting services and mobile web to mobile apps development. In a nutshell, we can be called the problem solvers with an extensive technology-powered toolkit. We render web based solutions that allow both start ups and large scale enterprises to cater to evolving consumer needs pro-actively. Our solutions enable businesses to establish a distinguished online presence, intensify knowledge management and collaboration and accelerate business processes to elevate productivity.</p>

<p> Over the last 6+ years, Amazon Softwares has earned its spurs deploying the whole gamut of IT outsourcing services both to offshore and onshore businesses and organisations. Our vast talent pool of IT experts and tried and tested development skills allow us the leverage to deliver solutions that span the development of brand new software right from inception to re-engineering of extant legacy systems deployed at large enterprises. We offer dedicated service teams on hire, which enables you to exercise full control over the development processes and manage resources in a cost-effective manner. Our diversified engagement models have been conceived to reserve exclusive resources and infrastructure for a particular client for a defined time frame. This allows businesses to have complete control, access and transparency over the development team to monitor and manage the Web development procedure.</p>

<p> Web and development solutions rendered by Amazon Softwares leverage array of advantages to your business including elevated ROI, tremendous cost savings, complete control over operations and increase in productivity and efficiency. Our solutions empower businesses to expand their service offerings, avoid business risks, execute projects with ease and keep long term investments at bay. We boast of a team of dedicated developers who work in accordance to your organization’s time zone and enable you to meet your business goals in a more ROI-centric manner.</p>

<p> To know more about our solutions and to get in touch with us, please complete our request information form and we shall get in touch with you shortly.</p>

</div>

</div>
    </>
    )
  }
  
  export default About;