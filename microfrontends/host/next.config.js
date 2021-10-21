const packageJsonDeps = require("./package.json").dependencies;
const withTM = require("next-transpile-modules")([
  "user-provider",
  "reactive-map",
]);

module.exports = withTM({
  webpack: (config, options) => {
    const federationConfig = {
      shared: {
        ...packageJsonDeps,
        react: {
          eager: true,
          requiredVersion: packageJsonDeps.react,
        },
        "react-dom": {
          eager: true,
          requiredVersion: packageJsonDeps["react-dom"],
        },
        "user-provider": {
          eager: true,
        },
        "reactive-map": {
          eager: true,
        },
      },
    };

    config.plugins.push(
      new options.webpack.container.ModuleFederationPlugin(federationConfig)
    );

    return config;
  },
  webpackDevMiddleware: (config) => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config;
  },
});
