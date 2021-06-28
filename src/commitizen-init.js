// const fs = require('fs');
// const path = require('path');
// const installPackages = require('./utils/install-packages');
// const pkg = require('../package.json');

// installPackages(['commitizen', 'cz-conventional-changelog'], [' -D']);
// // installPackages(['cz-customizable'], ['-D']);

// if(!pkg.config) {
//   pkg.config = {
//     "commitizen": {
//       "path": "./node_modules/cz-customizable"
//     }
//   }
// };

// fs.writeFileSync('./package.json', JSON.stringify(pkg, null, 2));

const fs = require('fs');
const path = require('path');
const installPackages = require('./utils/install-packages');
installPackages(['commitizen', 'cz-conventional-changelog', 'cz-customizable'], ['--dev']);

const pkg = require('../package.json');
if(!pkg.config) {
  pkg.config = {
    "commitizen":{
      "path":"node_modules/cz-customizable"
    }
  }
};

const czConfigTempl = fs.readFileSync(
  path.resolve(__dirname, './templates/.cz.config.templ.js')
).toString();

fs.writeFileSync(
  path.resolve(__dirname, '../.cz-config.js'),
  czConfigTempl
)

fs.writeFileSync('./package.json', JSON.stringify(pkg, null, 2));
