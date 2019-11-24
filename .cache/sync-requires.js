const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/admin/dev/sdcpa/test-gatsby-contentful/.cache/dev-404-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/admin/dev/sdcpa/test-gatsby-contentful/src/pages/index.js")))
}

