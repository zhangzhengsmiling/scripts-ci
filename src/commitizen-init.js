#! /usr/bin/env node

const fs = require('fs');
const path = require('path');
const installPackages = require('./utils/install-packages');
installPackages(['commitizen', 'cz-conventional-changelog'], ['--dev']);
const workspace = process.cwd();

const pkg = require(
  path.resolve(workspace, 'package.json')
);
if(!pkg.config) {
  pkg.config = {
    "commitizen":{
      "path":"node_modules/cz-conventional-changelog"
    }
  }
};

fs.writeFileSync('./package.json', JSON.stringify(pkg, null, 2));
