import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Logo from '../images/LOGO.jpg'
import Logo2 from '../images/tcc-logo.jpg'
import Test from '../images/test.png'
import { BiDonateHeart } from "react-icons/bi";


const Header = (props) => (
  <div className="site-header" style={{  background: `#fff`  }} >
    <div className="site-header-left">
     
      <a style={{height: '100%'}} href="/"><img src={Logo2} alt="TCC"/></a>
    </div>
    <div className="site-header-right">
      {props.SitePages.map((page) => {
        if('Donate' !== page.node.title ){
          return page.node.slug === 'get-involved-1' || 
                 page.node.slug === 'get-involved-2' || 
                 page.node.slug === 'get-involved-3' ? <></> : 
                 <div className="header-button-wrapper">
                    <a style={{ height: '100%',
                                margin: '0 auto',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: '#000' }} href={page.node.uri }>
                      <div class="button-default button-slanted">
                        <span class="button-slanted-content">{page.node.title}</span>
                      </div>
                    </a> 
                  </div>
        }
      })}
      <div className="header-button-wrapper">
        <a style={{ height: '100%',
                    margin: '0 auto',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#000' }} href="/posts">
          <div class="button-default button-slanted">
            <span class="button-slanted-content">Blog</span>
          </div>
        </a> 
      </div>
      <div className="nav-last-btn-wrapper-big-screen">
        <a  href="/merchandise">
          <button class="glow-on-hover" type="button" style={{fontSize: '16px', padding: '10px', fontWeight: 'bolder'}}> <img src={Test} alt="TCC"/> Donate Today!</button>
        </a>
      </div>
   
      {/*<div className="site-header-square" >
        <div className="site-header-square-content" >
          <img src={Test} alt="TCC"/>
          Donate
          {/*<BiDonateHeart style={{color: 'white', fontSize: '35px'}} />*
        </div>
      </div>*/}
    </div>
    <div className="nav-last-btn-wrapper-small-screen">
        <a  href="/merchandise">
          <button class="glow-on-hover" type="button" style={{fontSize: '16px', padding: '10px', fontWeight: 'bolder'}}> <img src={Test} alt="TCC"/> Donate Today!</button>
        </a>
      </div>
    
  
  </div>
)


/*
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
*/

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
