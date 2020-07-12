const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/preprensa3/Gabriel/Luka-Market/site/.cache/dev-404-page.js"))),
  "component---packages-gatsby-theme-lukamarket-src-templates-market-js": hot(preferDefault(require("/Users/preprensa3/Gabriel/Luka-Market/packages/gatsby-theme-lukamarket/src/templates/market.js"))),
  "component---packages-gatsby-theme-lukamarket-src-templates-markets-js": hot(preferDefault(require("/Users/preprensa3/Gabriel/Luka-Market/packages/gatsby-theme-lukamarket/src/templates/markets.js")))
}

