const fs = require('fs');
const installPackages = require('./utils/install-packages');
const jsonFormater = require('./utils/json-formater');

const jsonStringify = jsonFormater(2);

installPackages(['husky@4.3.6'], ['-D']);
const pkg = require('../package.json');
pkg.husky = {
  "hooks": {
    "commit-msg": "commitlint -e $GIT_PARAMS"
  }
}

fs.writeFileSync('./package.json', jsonStringify(pkg));
