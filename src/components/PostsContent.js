import React from "react"

import PageLayout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"





export default function PostsContent({ props }) {
    const data =  useStaticQuery(graphql`
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
    `)


  return (
      <>
      <div className="slider-header-wrapper"><h3>Thacher Climbing Coalition Blog Posts</h3></div>
      <div className="banner-divider align-center"  />
      <div style={{margin: '20px 0px 0px 0px'}} className="two-col-grid-wrap">
      {data.allWpPost.edges.map(({ node }) => (
        <div className="mini-post-wrapper">
          <img src={node.featuredImage.node.mediaItemUrl}/>
          <h3>{node.title}</h3>
          <div dangerouslySetInnerHTML={{ __html: node.content }} />
        </div>
      ))}
      </div>
      </>
  ) 
}
