import React from "react";
import Pageheader from "../component/Pageheader";
import Service from "../component/Service";
import {SiMagento} from 'react-icons/si';
import {BsCart4} from  'react-icons/bs';
import {MdOutlineScreenSearchDesktop} from 'react-icons/md';
import {GrWordpress} from 'react-icons/gr';
import {SiShopify} from 'react-icons/si'; 
import {CgWebsite} from 'react-icons/cg';
import Aboutimg1 from '../img/aboutimg1.png'

const Services = () =>{
    return(
    <> 
  <Pageheader title="Services" />
  <div className="mainContent">


<section className="servicePageHeader">
  <div className="container">
  <div className="row">
  <div className="col-md-7">
<p>At Amazon Softwares, We always find the efficient and cost effective solution for our valuable clients. We have an apparent and complete comprehension of what it takes to make prosperous website design for business experts. We will design and build up a custom web solution allowing your business to growth.</p>

<p>Amazon Softwares is an India based web design and development company which provide the various web services in US (New York, California, Boston, Texas, Austin, etc) in terms of website design & development, graphic design, logo design, CMS based development, e-commerce web development, theme integration, digital marketing etc.</p>

<p>Amazon is an award winning, full service web development industry which has specialization in working with businesses throughout US & UK. We have been launched the website with a reasonable vision to become a leading one stop web design and internet marketing company in India.</p>
</div>

<div className="col-md-5">
  <img src={Aboutimg1} className="img-fluid" />
</div>

</div>
  </div>
</section>

    <section className="serviceBox">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12">
            <Service 
            icon={<BsCart4 />}
            heading="ECOMMERCE WEB DEVELOPMENT"
            description="Magento Ecommerce Development, Magento Template Customization, Magento Theme Installation"
            sericeLink={"/about"}
             />
          </div>
          <div className="col-lg-4 col-md-12">
            <Service 
            icon={<SiMagento />}
            heading="MAGENTO DEVELOPMENT"
            description="Magento Custom Theme Development, Magento Template Customization, Magento Online Store Development
"
            sericeLink={"/about"}
             />
          </div>
          <div className="col-lg-4 col-md-12">
            <Service 
            icon={<CgWebsite />}
            heading="WEB DESIGN"
            description="PSD to HTML5/CSS3,  PSD to Responsive HTML,  Logo Design, Website PSD mockup design"
            sericeLink={"/about"}
             />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-12">
            <Service 
            icon={<SiShopify />}
            heading="SHOPIFY DEVELOPMENT"
            description="Shopify Theme Setup and Customization, Shopify Template Customization, Shopify Web Design"
            sericeLink={"/shopify"}
             />
          </div>
          <div className="col-lg-4 col-md-12">
            <Service 
            icon={<GrWordpress />}
            heading="WORDPRESS DEVELOPMENT"
            description="WordPress Theme Installation, WordPress Theme Customization, WordPress eCommerce Development"
            sericeLink={"/wordpress"}
             />
          </div>
          <div className="col-lg-4 col-md-12">
            <Service 
            icon={<MdOutlineScreenSearchDesktop />}
            heading="SEO SERVICES"
            description="Custom PHP web development, PHP Shopping Cart Development"
            sericeLink={"/seo"}
             />
          </div>
        </div>
      </div>
    </section>
  </div>







    </>
    )
  }
  
  export default Services;