import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Logo from '../images/tcc-logo.jpg'
import Test from '../images/test.png'
import { BiDonateHeart } from "react-icons/bi";


const Routes = [
  "Membership",
  "Visit Thacher",
  "Blog",
  "About Us",
  "Contact Us"
  /*"Donate",*/
]


const Header = ({ siteTitle }) => (
  <div className="site-header" style={{  background: `#fff`  }} >
    <div className="site-header-left">
      <img src={Logo} alt="TCC"/>
    </div>
    <div className="site-header-right">
      {Routes.map((route) => {
        return <div className="header-button-wrapper"> {route} </div>
      })}
      <div className="site-header-square" >
        <div className="site-header-square-content" >
          <img src={Test} alt="TCC"/>
          {/*<BiDonateHeart style={{color: 'white', fontSize: '35px'}} />*/}
        </div>
      </div>
    </div>
    
  
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}


/**
<div style={{ margin: `0 auto`,
                  maxWidth: 960,
                  padding: `1.45rem 1.0875rem`,
                }} >
      <h1 style={{ margin: 0 }}>
        <Link to="/" style={{ color: `white`, textDecoration: `none`, }} >
          {siteTitle} 
        </Link>
      </h1> */


export default Header
