const path = require('path');
const installPackages = require('../utils/install-packages');

installPackages(['sass', '-S']);
installPackages(['sass-loader', 'css-loader', 'style-loader'], ['-D']);

const sassLoaderGenerator = (config) => {
  installPackages(['sass', '-S']);
  installPackages(['sass-loader', 'css-loader', 'style-loader'], ['-D']);
}

module.exports = sassLoaderGenerator;

