#! /usr/bin/env node

const fs = require('fs');
const path = require('path');
const installPackages = require('./utils/install-packages');
installPackages(['@commitlint/config-conventional','@commitlint/cli'], ['-D']);
const workspace = process.cwd();

const commitlintTempl = fs.readFileSync(
  path.resolve(__dirname, './templates/.commitlint.templ.js')
).toString();
console.log(commitlintTempl);

const dest = `${workspace}/.commitlintrc.js`;
fs.writeFileSync(dest, commitlintTempl);
