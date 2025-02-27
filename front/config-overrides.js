// config-overrides.js
const webpack = require('webpack');

module.exports = function override(config, env) {
    // Ensure fallback is set up to polyfill node core modules:
    config.resolve.fallback = {
        ...config.resolve.fallback,
        crypto: require.resolve('crypto-browserify'),
        buffer: require.resolve('buffer/'),
        stream: require.resolve('stream-browserify'),
        process: require.resolve('process/browser'),
    };
    config.plugins.push(
        new webpack.ProvidePlugin({
            process: 'process/browser',
        })
    );
    return config;
};
