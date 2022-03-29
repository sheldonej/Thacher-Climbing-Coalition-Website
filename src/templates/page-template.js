// src/templates/BlogPost.js
import React from 'react';
import Layout from '../components/layout';
import SEO from "../components/seo"
import BannerPic from '../images/placeholder2.jpg'
import "../templates/page.css"
import MerchandiseContent from "../components/MerchandiseContent"
import PostsContent from "../components/PostsContent"

const PageTemplate = (props)  => (
    <Layout >
      <SEO title={props.pageContext.title}
          description={props.pageContext.excerpt} />
      <div className="page-banner">
        <img alt="banner-pic" src={BannerPic}/>
        <div className="page-banner-title">{props.pageContext.title}</div>
      </div>
      <div className="wp-page-wrapper" 
        dangerouslySetInnerHTML={{__html: props.pageContext.content}}
      />
      {props.pageContext.title === "Merchandise" ? <MerchandiseContent /> : <></> }
      {props.pageContext.title === "Posts" ? <PostsContent /> : <></> }
    </Layout>
);

export default PageTemplate;