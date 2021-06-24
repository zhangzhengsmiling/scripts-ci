const fs = require('fs');
const installPackages = require('./install-packages');
const jsonFormater = require('./json-formater');

const jsonStringify = jsonFormater(2);

installPackages(['@commitlint/config-conventional', '@commitlint/cli', 'husky'], ['-D']);

const commitlineConfig = `module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {

  }
};
`

fs.writeFileSync('./.commitlintrc.js', commitlineConfig);
const pkg = require('../package.json');
pkg.husky = {
  "hooks": {
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
  }
}

fs.writeFileSync('./package.json', jsonStringify(pkg));
