#! /usr/bin/env node

const fs = require('fs');
const path = require('path');

const installPackages = require('../utils/install-packages');
const jsonFormater = require('../utils/json-formater');
const jsonStringify = jsonFormater(2);
const workspace = process.cwd();
const pathPkg = path.resolve(workspace, 'package.json');

installPackages(['standard-version'], ['-D']);

const pkg = require(pathPkg);
if(!pkg.scripts)
  pkg.scripts = {};
pkg.scripts.release = 'yarn standard-version';
fs.writeFileSync(pathPkg, jsonStringify(pkg));
