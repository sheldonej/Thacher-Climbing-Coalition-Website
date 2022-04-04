// src/templates/BlogPost.js
import React from 'react';
import Layout from '../components/layout';
import SEO from "../components/seo"
import BannerPic from '../images/placeholder2.jpg'

const BlogPostTemplate = (props)  => (
    <Layout>
      <SEO title={props.pageContext.title}
          description={props.pageContext.excerpt} />
      <div className="page-banner">
        <img alt="banner-pic" src={BannerPic}/>
        <div className="page-banner-title-post">{props.pageContext.title}</div>
      </div>
      <div
        style={{margin: '40px'}}
        dangerouslySetInnerHTML={{__html: props.pageContext.content}}
      />
    </Layout>
);

export default BlogPostTemplate;