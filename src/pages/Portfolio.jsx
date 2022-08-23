import React from "react";
import Pageheader from "../component/Pageheader";
import Portfoliosingle from "../component/Portfoliosingle";
import BuddyPhones from '../img/portfolio/BuddyPhones-1.jpg'
import BuddyPhonesMain from '../img/portfolio/BuddyPhones-scaled.jpg'
import FconlineMain from '../img/portfolio/fconlineMain.png'
import Fconline from '../img/portfolio/fconline.jpg'
import Funkydiva from '../img/portfolio/funkydiva-1.jpg'
import FunkydivaMain from '../img/portfolio/funkydiva-scaled.jpg'
import Langlybags from '../img/portfolio/Langlybags-1.jpg'
import LanglybagsMain from '../img/portfolio/Langlybags-scaled.jpg'
import Onanoff from '../img/portfolio/onanoff-1.jpg'
import OnanoffMain from '../img/portfolio/onanoffMain.jpg'
import Uberlotto from '../img/portfolio/uberlotto.jpg'
import UberlottoMain from '../img/portfolio/uberlottoMain.png'
const Portfolio = () =>{
    return(
    <>
  <Pageheader title="Portfolio" />


<div className="mainContent">

<div className="container">
<ul class="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="pills-shopify-tab" data-bs-toggle="pill" data-bs-target="#pills-shopify" type="button" role="tab" aria-controls="pills-shopify" aria-selected="true">Shopify</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-wordpress-tab" data-bs-toggle="pill" data-bs-target="#pills-wordpress" type="button" role="tab" aria-controls="pills-wordpress" aria-selected="false">Wordpress</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-php-tab" data-bs-toggle="pill" data-bs-target="#pills-php" type="button" role="tab" aria-controls="pills-php" aria-selected="false">PHP</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-php-tab" data-bs-toggle="pill" data-bs-target="#pills-php" type="button" role="tab" aria-controls="pills-php" aria-selected="false">Woocommerce</button>
  </li>
</ul>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-shopify" role="tabpanel" aria-labelledby="pills-shopify-tab">
  
  <Portfoliosingle
  portfolioId="uberLoto"
  portfolioName="Uber Lotto"
  portfolioImage={Uberlotto}
  portfolioImageLarge={UberlottoMain}
   />
  
  </div>
  <div class="tab-pane fade" id="pills-wordpress" role="tabpanel" aria-labelledby="pills-wordpress-tab">...</div>
  <div class="tab-pane fade" id="pills-php" role="tabpanel" aria-labelledby="pills-php-tab">...</div>
</div>

</div>



<div className="container">
  <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div className="modal-dialog modal-fullscreen modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalToggleLabel">Modal 1</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        Show a second modal and hide this one with the button below.
      </div>
      <div className="modal-footer">
        <button className="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Open second modal</button>
      </div>
    </div>
  </div>
</div>
<div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalToggleLabel2">Modal 2</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        Hide this modal and show the first with the button below.
      </div>
      <div className="modal-footer">
        <button className="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" data-bs-dismiss="modal">Back to first</button>
      </div>
    </div>
  </div>
</div>
<a className="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Open first modal</a>
</div>
</div>

    </>
    )
  }
  
  export default Portfolio;