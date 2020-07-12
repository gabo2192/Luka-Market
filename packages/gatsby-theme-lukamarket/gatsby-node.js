const fs = require('fs');

exports.onPreBootstrap = ({ reporter }, options) => {
  const contentPath = options.contentPath || 'data';
  console.log(contentPath);

  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`);
    fs.mkdirSync(contentPath);
  }
};

exports.sourceNodes = ({ actions }) => {
  actions.createTypes(`
  type Market implements Node @dontInfer {
    id: ID!
    name: String!
    phone: String!
    address: String!
    logo: String!
    products: [Product!]!
    slug: String!
  }
  type Product implements Node @dontInfer {
    title: String!
    price: Float!
    description: String!
    picture: String!
  }
  `);
};

exports.createResolvers = ({ createResolvers }, options) => {
  const basePath = options.basePath || '/';
  console.log(basePath);

  const slugify = (str) => {
    const slug = str
      .toLowerCase()
      .replace(/ñ/gi, 'n')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
    return `/${basePath}/${slug}`.replace(/\/\/+/g, '/');
  };
  createResolvers({
    Market: {
      slug: {
        resolve: (source) => slugify(source.name),
      },
    },
  });
};

exports.createPages = async ({ actions, graphql, reporter }, options) => {
  const basePath = options.basePath || '/';
  actions.createPage({
    path: basePath,
    component: require.resolve('./src/templates/markets.js'),
  });

  const result = await graphql(`
    query {
      allMarket(sort: { fields: name, order: ASC }) {
        nodes {
          id
          slug
        }
      }
    }
  `);

  if (result.erros) {
    reporter.panic('error loading Markets', reporter.errors);
    return;
  }
  const markets = result.data.allMarket.nodes;

  markets.forEach((market) => {
    const slug = market.slug;
    actions.createPage({
      path: slug,
      component: require.resolve('./src/templates/market.js'),
      context: {
        marketID: market.id,
      },
    });
  });
};
