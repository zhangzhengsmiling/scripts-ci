const fs = require('fs');
const path = require('path');
const installPackages = require('./utils/install-packages');
installPackages(['commitlint-config-cz', '@commitlint/cli'], ['-D']);
const homePath = process.cwd();

const commitlintTempl = fs.readFileSync(
  path.resolve(homePath, 'src/templates/.commitlint.templ.js')
).toString();

const dest = `${homePath}/.commitlintrc.js`;
fs.writeFileSync(dest, commitlintTempl);
