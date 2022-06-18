exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  createPage({
    path: "/",
    component: require.resolve("./src/pages/index.js"),
    context: {},
    defer: true,
  });

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
    component: require.resolve("./src/pages/wishlists.js"),
    context: {
      data: result,
      title: 'titleTest321'
    },
    defer: true,
    data: result,
    title: 'oksoitworks'
  })
}
