const path = require(`path`);
//const {createFilePath} = require(`gatsby-source-filesystem`);

exports.createPages = async ({graphql, actions, reporter}) => {
  const {createPage} = actions;
  const BlogPostTemplate = path.resolve('./src/templates/BlogPost.js');
  const result = await graphql(`
    {
      allWpPost {
        edges {
          node {
            id
            title
            slug
            excerpt
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
      component: BlogPostTemplate,
      context: post.node, 
    });
  });
};
