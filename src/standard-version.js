const fs = require('fs');
const installPackages = require('./install-packages');
const jsonFormater = require('./json-formater');

const jsonStringify = jsonFormater(2);

installPackages(['standard-version'], ['-D']);

const pkg = require('../package.json');
pkg.scripts.release = 'yarn standard-version';
fs.writeFileSync('./package.json', jsonStringify(pkg));
