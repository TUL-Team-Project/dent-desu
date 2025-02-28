// config-overrides.js
const webpack = require('webpack');

module.exports = function override(config, env) {
    // Ensure fallback is set up to polyfill node core modules:
    config.resolve.fallback = {
        ...config.resolve.fallback,
    };
    config.plugins.push(
        new webpack.ProvidePlugin({
            process: 'process/browser',
        })
    );
    return config;
};
