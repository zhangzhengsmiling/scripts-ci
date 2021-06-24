// const fs = require('fs');
const installPackages = require('./install-packages');

installPackages(['commitizen', 'cz-conventional-changelog'], ['--dev']);

// const pkg = require('../package.json');
// if(!pkg.config) {
//   pkg.config = {
//     "commitizen":{
//       "path":"node_modules/cz-conventional-changelog"
//     }
//   }
// };

// fs.writeFileSync('./package.json', JSON.stringify(pkg, null, 2));
