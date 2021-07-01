#! /usr/bin/env node

const fs = require('fs');
const path = require('path');
const installPackages = require('../utils/install-packages');
const jsonFormater = require('../utils/json-formater');
const jsonStringify = jsonFormater(2);
const workspace = process.cwd();
const pathPkg = path.resolve(workspace, 'package.json');

installPackages(['husky@4.3.6'], ['-D']);
const pkg = require(pathPkg);
pkg.husky = {
  "hooks": {
    "commit-msg": "commitlint -e $GIT_PARAMS"
  }
}

fs.writeFileSync(pathPkg, jsonStringify(pkg));
