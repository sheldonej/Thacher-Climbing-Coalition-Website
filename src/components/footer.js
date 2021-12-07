import * as React from "react"
import { SocialIcon } from 'react-social-icons';

const Footer = () => (
    <footer >
        <div className="footer-top" >
          <div className="footer-top-content" >
            <h4 style={{color: 'white'}}>Stay Connected</h4>
          </div>
          <div className="footer-top-content" >
            <h4 style={{color: 'white'}}>Our Mission</h4>
            <p style={{paddingTop: `10px`,
                        paddingLeft: `10px`, 
                        paddingRight: `10px`, 
                        paddingBottom: `10px`}}>
                Integer vitae justo eget magna fermentum iaculis. Ornare aenean euismod 
                elementum nisi quis eleifend quam adipiscing. Morbi enim nunc faucibus 
                a pellentesque sit amet porttitor eget. Dolor sit amet consectetur adipiscing 
                elit pellentesque. Nulla facilisi morbi tempus iaculis urna id.
            </p>
          </div>
          <div className="footer-top-content" >
            <h4 style={{color: 'white'}}>Navigation</h4>
          </div>
        </div>
        <div className="footer-divider align-center"  />
        <div className="footer-bottom" >
          <div className="footer-bottom-content" >
            Copyright © {new Date().getFullYear()}, Thacher Climbing Coalition &nbsp;|&nbsp;
            This website is a&nbsp;<div style={{ display: 'flex', color: 'red'}} >RCOS</div>&nbsp;project
          </div>
          <div className="footer-socials-wrapper">  
            <SocialIcon style={{width: `25px`, height: `25px`, borderRadius: '50%' }} url="https://twitter.com/" />
            <SocialIcon style={{width: `25px`, height: `25px`, borderRadius: '50%' }} url="https://facebook.com/" />
            <SocialIcon style={{width: `25px`, height: `25px`, borderRadius: '50%' }} url="https://instagram.com/" /> 
          </div>
        </div>
    </footer>
)

export default Footer