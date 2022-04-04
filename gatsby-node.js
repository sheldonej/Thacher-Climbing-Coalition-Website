const path = require(`path`);
//const {createFilePath} = require(`gatsby-source-filesystem`);

exports.createPages = async ({graphql, actions, reporter}) => {
  const {createPage} = actions;
  const PostTemplate = path.resolve('./src/templates/post-template.js');
  const PageTemplate = path.resolve('./src/templates/page-template.js');

  const result = await graphql(`
    {
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
      allWpPost {
        edges {
          node {
            id
            title
            slug
            excerpt
            content
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const BlogPosts = result.data.allWpPost.edges;
  BlogPosts.forEach(post => {
    createPage({
      path: `/post/${post.node.slug}`,
      component: PostTemplate,
      context: post.node, 
    });
  });

 const SitePages = result.data.allWpPage.edges;
  SitePages.forEach(page => {
    if(!(page.node.slug === 'get-involved-1' || 
        page.node.slug === 'get-involved-2' || 
        page.node.slug === 'get-involved-3')){
        createPage({
          path: page.node.uri,
          component: PageTemplate,
          context: page.node, 
        });
   }});
};
