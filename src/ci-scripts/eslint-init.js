#! /usr/bin/env node

const fs = require('fs');
const path = require('path');
const installPackages = require('../utils/install-packages');
const workspace = process.cwd();
const pathPkg = path.resolve(workspace, 'package.json');
installPackages([
  'eslint',
  'eslint-config-standard',
  'eslint-plugin-import',
  'eslint-plugin-node',
  'eslint-plugin-promise',
  '@typescript-eslint/parser',
  '@typescript-eslint/eslint-plugin'
], ['--dev']);

const pkg = require(pathPkg);
if (!pkg.scripts) {
  pkg.scripts = {};
}
if(!pkg.scripts.eslint) {
  pkg.scripts.eslint = 'eslint src --ext .ts'
};

const eslintrcTempl = fs.readFileSync(
  path.resolve(__dirname, '../templates/.eslintrc.templ.js')
).toString();

const dest = `${workspace}/.eslintrc.js`;
fs.writeFileSync(dest, eslintrcTempl);


fs.writeFileSync(pathPkg, JSON.stringify(pkg, null, 2));
