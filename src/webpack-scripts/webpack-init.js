#! /usr/bin/env node

const fs = require('fs');
const path = require('path');
const child_process = require('child_process');
const installPackages = require('../utils/install-packages');
const jsonFormater = require('../utils/json-formater');
const workspace = process.cwd();
const pathPkg = path.resolve(workspace, 'package.json');
const { execSync } = child_process;

const format = jsonFormater(2);

installPackages([
  'webpack',
  'webpack-cli',
  'html-webpack-plugin',
  'typescript',
  'ts-loader',
  'webpack-dev-server',
], ['-D']);

const templ = fs.readFileSync(
  path.resolve(__dirname, '../templates/.webpack-ts.templ.js')
).toString();

execSync('tsc --init');

fs.writeFileSync(
  path.resolve(workspace, 'webpack.config.js'),
  templ
);

const pkg = require(pathPkg);
if(!pkg.scripts)
  pkg.scripts = {};

pkg.scripts.dev = 'webpack serve --config ./webpack.config.js';
pkg.scripts.build = 'webpack';
fs.writeFileSync(pathPkg, format(pkg));
