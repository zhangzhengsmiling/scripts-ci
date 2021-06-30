#! /usr/bin/env node

const fs = require('fs');
const path = require('path');
const installPackages = require('./utils/install-packages');
const jsonFormater = require('./utils/json-formater');
const jsonStringify = jsonFormater(2);
const workspace = process.cwd();

installPackages(['husky@4.3.6'], ['-D']);
const pkg = require(
  path.resolve(workspace, 'package.json')
);
pkg.husky = {
  "hooks": {
    "commit-msg": "commitlint -e $GIT_PARAMS"
  }
}

fs.writeFileSync('./package.json', jsonStringify(pkg));
