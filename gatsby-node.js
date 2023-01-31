exports.createPages = ({ actions }) => {
    const { createPage } = actions

    createPage({
      path: `/`,
      component: require.resolve(`./src/pages/index.js`),
      context: {},
    })

    createPage({
      path: `/Missions`,
      component: require.resolve(`./src/pages/Missions.js`),
      context: {},
    })

    createPage({
      path: `/Profile`,
      component: require.resolve(`./src/pages/Profile.js`),
      context: {},
    })
  }
