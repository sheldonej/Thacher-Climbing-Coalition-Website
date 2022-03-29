/*import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1 >Hello World</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={100}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p>
  </Layout>
)

export default IndexPage*/

import React from "react"
import { graphql } from "gatsby"
import PageLayout from "../components/layout"
import SEO from "../components/seo"

import Slider from "../components/slider"
import Shirt from '../images/TCCtshirt.png'

import { BiWorld, BiGroup, BiCar } from "react-icons/bi";
import { GrGroup, GrCar } from "react-icons/gr";

export default function Home({ data }) {
  return (
    <PageLayout>
      <SEO title="home" />
      <Slider />
        <div className="home-content" >
              <div className="home-content1" >
                <div className="slider-header-wrapper"><h3>Get Involved</h3></div>
                 <div className="banner-divider align-center"  />
                  <div className="flow-row" >
                      <div className="home-content-section" >
                        <div className="content-box" >
                              <div className="content-box-circ" ><BiGroup style={{/*color: 'red',*/ fontSize: '35px'}} /></div>
                          <h3 style={{padding: '0px 0px 10px 0px'}}>About Us</h3>
                          <p>We are a volunteer group of climbers who manage and advocate for climbing at Thacher State Park. Our mission is to transform the Helderberg Escarpment into a premier rock and ice climbing destination in the Northeast and to have all the cliff lands protected for generations to come, serving all user groups, and nourishing the physical and mental health of our local community.</p>
                        </div>
                      </div>
                      <div className="home-content-section" >
                        <div className="content-box" >
                          <div className="content-box-circ" ><BiWorld style={{/*color: 'red',*/ fontSize: '35px'}} /></div>
                          <h3 style={{padding: '0px 0px 10px 0px'}}>Membership</h3>
                          <p style={{margin: '0px 0px 30px 0px'}}><text style={{fontWeight: 'bold'}}>THANK YOU</text> for supporting climbing at Thacher.</p>
                          <p style={{margin: '0px 0px 30px 0px'}}>Your membership also supports the Access Fund and their mission!</p>
                          <p style={{margin: '0px 0px 30px 0px'}}>Joint TCC and Access Fund Membership</p>
                        </div>
                      </div>
                      <div className="home-content-section" >
                        <div className="content-box" >
                          <div className="content-box-circ" ><BiCar style={{/*color: 'red',*/ fontSize: '35px'}} /></div>
                          <h3 style={{padding: '0px 0px 10px 0px'}}>Visit Thacher</h3>
                          <a style={{fontWeight: 'bold', margin: '0px 0px 30px 0px'}} href="http://climbthacher.org/wp-content/uploads/2021/03/Thacher2021ClimbingApplication.pdf">The 2021 Climbing Application is now live!!</a>
                          <p p style={{margin: '0px 0px 30px 0px'}}>Make sure to complete your free annual climbing permit application before your first visit!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="home-content2" >
                    <div className="tshirt-banner" >
                        <img src={Shirt} alt="dsabdjkabsdkajdb"/>
                        
                        <div className="tshirt-banner-header-wrapper">
                          <h3>TCC T-SHIRTS</h3>
                          <button>Donate Today!</button>
                        </div>
                        <div className="banner-divider" style={{backgroundColor: 'white', width: '70px'}} />
                        <h5 style={{color: 'white' }}>Support the Thacher Climbing Coalition and get your TCC Swag here!</h5>
                        <div className="tshirt-paragraph-wrapper">
                          <p> Donate $25 or more and get a free t-shirt. We’ll ship them to your address via USPS Priority Mail.</p>
                        </div>
                    </div>
                  </div>
                  <div className="home-content3" />
        </div>
      <div className="slider-header-wrapper"><h3>Most Recent Posts</h3></div>
      <div className="banner-divider align-center"  />
      <div className="two-col-grid-wrap">
      {data.allWpPost.edges.slice(0, 4).map(({ node }) => (
        <div className="mini-post-wrapper">
          {/*<img src={node.featuredImage.node.mediaItemUrl}/>*/}
          <h3>{node.title}</h3>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
      ))}
      </div>
    </PageLayout>
  
  ) 
}

export const pageQuery = graphql`
  query {
    allWpPost(sort: { fields: [date] }) {
      edges {
      node {
        title
        excerpt
        featuredImage {
          node {
            mediaItemUrl
          }
        }
      }
    }
    }
  }
`
