import * as React from "react"
import BannerPic from '../images/placeholder2.jpg'
import Layout from "../components/layout"
import Seo from "../components/seo"
import _404 from '../images/error_404.svg'

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div className="page-banner">
        <img alt="banner-pic" src={BannerPic}/>
        <div className="page-banner-title"></div>
    </div>
     <div className="page-404-wrapper">
       <img src={_404} alt="" />
       <a href='/'>
         <div class="button-default button-slanted">
            <span class="button-slanted-content">Go Back To Home Page</span>
          </div>
        </a>
     </div>
  </Layout>
)

export default NotFoundPage
