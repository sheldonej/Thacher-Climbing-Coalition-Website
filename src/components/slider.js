import * as React from "react"
import IMG1 from '../images/placeholder1.jpg'
import IMG2 from '../images/placeholder2.jpg'

const Slider = ({ siteTitle }) => (
  <div className="slider-wrapper" >
    <div className="slider-img-container">
        <img src={IMG1} alt="dsakj" />
    </div>
    <div className="slider-mid-container" >
        <div className="slider-header-wrapper"><h3>Thacher Climbing Coalition</h3></div>
         <div className="banner-divider align-center" />
        <div className="slider-paragragh-wrapper">
            <p> 
              The Thacher Climbing Coalition works to protect and advance climbing at Thacher State Park.
            </p>
        </div>
        <div className="slider-footer-wrapper"><button>Join the TCC </button></div>
    </div>
    <div className="slider-img-container" >
        <img src={IMG2} alt="dsajk" />
    </div>
    

  
  </div>
)


    {/*<div class="mountain-scene">
     <div className="small-mountains">
      <div className="tri"></div>
      <div className="tri"></div>
      <div className="tri"></div>
        <div className="tri"></div>
      <div className="tri"></div>
        <div className="tri"></div>
    </div>
    <div className="tall-mountains">
      <div className="tri2"></div>
      <div className="tri2"></div>
        <div className="tri2"></div>
       <div className="tri2"></div>
       <div className="tri2"></div>    
    </div>
    <div className="tiny-mountains">
      <div className="tri3"></div>
      <div className="tri3"></div>
      <div className="tri3"></div>
      <div className="tri3"></div>
      <div className="tri3"></div>
    </div> */}
export default Slider;