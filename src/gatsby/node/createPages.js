const config = require('../../../gatsby-config')
const query = require('../data/query')
const path = require(`path`)
const { paginate } = require(`gatsby-awesome-pagination`)

module.exports = async ({ graphql, actions }) => {
  const { createPage } = actions

  const basePath = config.siteMetadata.basePath || '/paintings'

  // Create a page for each "post"
  const postsQuery = await graphql(query.data.posts)
  const posts = postsQuery.data.allContentfulPost.edges
  posts.forEach((post, i) => {
    const next = i === posts.length - 1 ? null : posts[i + 1].node
    const prev = i === 0 ? null : posts[i - 1].node

    createPage({
      path: `${basePath === '/paintings' ? '' : basePath}/${post.node.slug}/`,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        slug: post.node.slug,
        basePath: basePath === '/paintings' ? '' : basePath,
        prev,
        next,
      },
    })
  })

  // Create a page containing all "posts" and paginate.
  paginate({
    createPage,
    component: path.resolve(`./src/templates/posts.js`),
    items: posts,
    itemsPerFirstPage: 999,
    itemsPerPage: 999,
    pathPrefix: basePath,
    context: {
      basePath: basePath === '/paintings' ? '' : basePath,
      paginationPath: basePath === '/paintings' ? '' : `/${basePath}`,
    },
  })

  // Create a page for each "page"
  const pagesQuery = await graphql(query.data.pages)
  const pages = pagesQuery.data.allContentfulPage.edges
  pages.forEach((page, i) => {
    createPage({
      path: `/${page.node.slug}/`,
      component: path.resolve(`./src/templates/page.js`),
      context: {
        slug: page.node.slug,
      },
    })
  })
}
