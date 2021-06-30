#! /usr/bin/env node

const fs = require('fs');
const installPackages = require('./install-packages');
const jsonFormater = require('./json-formater');
const path = require('path');
const jsonStringify = jsonFormater(2);
const workspace = process.cwd();

installPackages(['standard-version'], ['-D']);

const pkg = require(
  path.resolve(workspace, 'package.json')
);
pkg.scripts.release = 'yarn standard-version';
fs.writeFileSync('./package.json', jsonStringify(pkg));
