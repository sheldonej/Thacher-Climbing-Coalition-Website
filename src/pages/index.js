import React from "react"
import { graphql } from "gatsby"
import PageLayout from "../components/layout"
import SEO from "../components/seo"
import { BiDonateHeart } from "react-icons/bi";

import Slider from "../components/slider"
import Shirt from '../images/TCCtshirt.png'

import { BiWorld, BiGroup, BiCar } from "react-icons/bi";
import { GrGroup, GrCar } from "react-icons/gr";
import Test from '../images/test.png'


export default function Home({ data }) {

  console.log(data)
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
                              {data.allWpPage.edges.map(({ node }) => {
                                return node.slug === 'get-involved-1' ?   <div dangerouslySetInnerHTML={{ __html: node.content }} /> : <></>
                                 
                              })}
                        </div>
                      </div>
                      <div className="home-content-section" >
                        <div className="content-box" >
                          <div className="content-box-circ" ><BiWorld style={{/*color: 'red',*/ fontSize: '35px'}} /></div>
                          {data.allWpPage.edges.map(({ node }) => {
                                return node.slug === 'get-involved-2' ?   <div dangerouslySetInnerHTML={{ __html: node.content }} /> : <></>
                                 
                          })}
                        </div> 
                      </div>
                      <div className="home-content-section" >
                        <div className="content-box" >
                          <div className="content-box-circ" ><BiCar style={{/*color: 'red',*/ fontSize: '35px'}} /></div>
                          {data.allWpPage.edges.map(({ node }) => {
                            return node.slug === 'get-involved-3' ?   <div dangerouslySetInnerHTML={{ __html: node.content }} /> : <></>      
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="home-content2" >
                    <div className="tshirt-banner" >
                        <img src={Shirt} alt="dsabdjkabsdkajdb"/>
                        
                        <div className="tshirt-banner-header-wrapper">
                          <h3>TCC T-SHIRTS</h3>
                          <a  href="/merchandise">
                            <button class="glow-on-hover-white" type="button" style={{fontSize: '16px', padding: '10px', fontWeight: 'bolder', color: 'black', }}>Donate Today!</button>
                          </a>
                        </div>
                        <div className="banner-divider" style={{backgroundColor: 'white', width: '70px'}} />
                        <h5 style={{color: 'white', paddingTop: '5px' }}>Support the Thacher Climbing Coalition and get your TCC Swag here!</h5>
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
      {data.allWpPost.edges.slice(0, 4).map(({ node }) => {
        return node.featuredImage ?
        <div className="mini-post-wrapper">
          <img src={node.featuredImage.node.mediaItemUrl}/>
          <h3><a href={'/post/' + node.slug}>{node.title }</a></h3>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>  
        :
        <div className="mini-post-wrapper">
      
        <h3><a href={'/post/' + node.slug}>{node.title}</a></h3>
        <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
      </div>  
      })}
      </div>
    </PageLayout>
  
  ) 
}

export const pageQuery = graphql`
  query {
    allWpPage {
      edges {
        node {
          id
          title
          slug
          content
          uri
        }
      }
    }
    allWpPost(sort: {fields: [date], order: DESC}) {
      edges {
      node {
        title
        excerpt
        content
        slug
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
