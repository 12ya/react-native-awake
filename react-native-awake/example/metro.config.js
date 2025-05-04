const path = require('path');
const { getDefaultConfig } = require('@react-native/metro-config');

const root = path.resolve(__dirname, '..');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = getDefaultConfig(__dirname);

// Add the additional node_modules folders
config.resolver.nodeModulesPaths = [
  path.resolve(__dirname, 'node_modules'),
  path.resolve(root, 'node_modules'),
];

// Add the additional watchFolders
config.watchFolders = [root];

// Add extra modules to resolver
config.resolver.extraNodeModules = {
  'react-native-awake': root,
};

module.exports = config;
