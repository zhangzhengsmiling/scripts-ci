const child_process = require('child_process');
const { execSync } = child_process;

const installPackages = (packages, options = []) => {
  if(!packages || packages.length === 0) throw new Error('pacakges is requried!')
  const script = `yarn add ${packages.join(' ')} ${options.join(' ')}`;
  execSync(script, {stdio: [0, 1, 2]})
}

module.exports = installPackages;