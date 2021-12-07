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
                <div className="slider-header-wrapper"><h3>Lorem Ipsum</h3></div>
                 <div className="banner-divider align-center"  />
                  <div className="flow-row" >

                      <div className="home-content-section" >
                        <div className="content-box" >
                          <div className="content-box-circ" ><BiWorld style={{/*color: 'red',*/ fontSize: '35px'}} /></div>
                          <h4>Membership</h4>
                          <p>Integer malesuada nunc vel risus commodo viverra maecenas accumsan. Vel eros donec ac odio. Vestibulum sed arcu non odio euismod lacinia at quis risus. In massa tempor nec feugiat. Est ultricies integer quis auctor elit sed. Nec feugiat nisl pretium fusce id velit. Adipiscing tristique risus nec feugiat in. Rhoncus est pellentesque elit ullamcorper dignissim. Pulvinar elementum integer enim neque.</p>
                        </div>
                      </div>

                      <div className="home-content-section" >
                        <div className="content-box" >
                              <div className="content-box-circ" ><BiGroup style={{/*color: 'red',*/ fontSize: '35px'}} /></div>
                          <h4>About Us</h4>
                          <p>Fermentum leo vel orci porta non pulvinar neque. Nullam eget felis eget nunc. Interdum velit euismod in pellentesque massa placerat duis ultricies. At varius vel pharetra vel turpis nunc eget. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. Varius vel pharetra vel turpis nunc eget lorem dolor sed.</p>
                        </div>
                      </div>
                      <div className="home-content-section" >
                        <div className="content-box" >
                          <div className="content-box-circ" ><BiCar style={{/*color: 'red',*/ fontSize: '35px'}} /></div>
                          <h4>Visit Thacher</h4>
                          <p>Mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Enim lobortis scelerisque fermentum dui faucibus. Gravida cum sociis natoque penatibus et. A lacus vestibulum sed arcu non odio euismod. Lorem ipsum dolor sit amet. Aliquet lectus proin nibh nisl condimentum id venenatis. Condimentum lacinia quis vel eros donec. Risus nullam eget felis eget nunc lobortis mattis aliquam.</p>
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

      {data.allWpPost.edges.map(({ node }) => (
        <div>
          <p>{node.title}</p>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
      ))}
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
          slug
        }
      }
    }
  }
`
