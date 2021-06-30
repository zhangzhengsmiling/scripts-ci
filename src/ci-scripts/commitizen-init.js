#! /usr/bin/env node

const fs = require('fs');
const path = require('path');
const installPackages = require('../utils/install-packages');
const workspace = process.cwd();
const pathPkg = path.resolve(workspace, 'package.json');
installPackages(['commitizen', 'cz-conventional-changelog'], ['--dev']);

const pkg = require(pathPkg);
if(!pkg.config) {
  pkg.config = {
    "commitizen":{
      "path":"node_modules/cz-conventional-changelog"
    }
  }
};

fs.writeFileSync(pathPkg, JSON.stringify(pkg, null, 2));
