import * as React from "react"
import { SocialIcon } from 'react-social-icons';

const Footer = (props) => (
    <footer >
        <div className="footer-top" >
          <div className="footer-sub-content" >
            <div className="subscribe-col-wrap">
            <a href="/subscribe">
            <button class="glow-on-hover" type="button" style={{fontSize: '2rem', padding: '20px'}}>Become a TCC Member Today!</button>
            </a>
            </div>
          </div>
          <div className="footer-top-content" >
            <h4 style={{color: 'white'}}>Our Mission</h4>
            <p style={{paddingTop: `10px`,
                        paddingLeft: `10px`, 
                        paddingRight: `10px`, 
                        paddingBottom: `10px`}}>
               Our mission is to transform the Helderberg Escarpment into a premier rock and ice climbing destination in the Northeast and to have all the cliff lands protected for generations to come, serving all user groups, and nourishing the physical and mental health of our local community.

            </p>
          </div>
          
 
        </div>
        <div className="footer-divider align-center" style={{marginTop: `25px`}} />
        <div className="footer-bottom" >
          <div className="footer-bottom-content" >
           <div> Copyright © {new Date().getFullYear()}, Thacher Climbing Coalition &nbsp;</div><div>|&nbsp;</div>
           <div style={{display: 'flex'}}> This website is a&nbsp;<div style={{ display: 'flex', color: 'red'}} >RCOS</div>&nbsp;project</div>
          </div>
          <div className="footer-socials-wrapper"> 
            <SocialIcon style={{width: `25px`, height: `25px`, borderRadius: '50%' }} url="mailto:info@climbthacher.org" />  
            <SocialIcon style={{width: `25px`, height: `25px`, borderRadius: '50%' }} url="https://www.facebook.com/ThacherClimbingCoalition/" />
          </div>
        </div>
    </footer>
)

export default Footer