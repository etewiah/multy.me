// next.config.js
const Dotenv = require("dotenv-webpack");

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Add the new plugin to the existing webpack plugins
    config.plugins.push(new Dotenv({ silent: true }));

    return config;
  },
  env: {
    SUPABASE_KEY: process.env.SUPABASE_KEY,
    supabase_url: process.env.supabase_url,
  },
};
