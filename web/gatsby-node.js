exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allSanityWishlist {
        nodes {
          items
          title
        }
      }
    }
  `)

  createPage({
    path: "/wishlists",
    component: require.resolve("./src/components/wishlists.js"),
    context: {
      wishlists: result.data.allSanityWishlist.nodes,
    },
    defer: true,
    data: result,
    title: 'oksoitworks'
  })
}
