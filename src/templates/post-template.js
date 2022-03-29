// src/templates/BlogPost.js
import React from 'react';
import Layout from '../components/layout';
import SEO from "../components/seo"

const BlogPostTemplate = (props)  => (
    <Layout>
      <SEO title={props.pageContext.title}
          description={props.pageContext.excerpt} />
      <h1>Blog Post Template</h1>
      <h1>{props.pageContext.title}</h1>
      <div
        style={{marginTop: 20}}
        dangerouslySetInnerHTML={{__html: props.pageContext.excerpt}}
      />
    </Layout>
);

export default BlogPostTemplate;