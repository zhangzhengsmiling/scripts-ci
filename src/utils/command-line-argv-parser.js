const commandLinArgvParser = (argvlist) => {
  const [path, target, ...args] = argvlist;
  const params = args
    .map(argument => argument.replace(/^-/, ''))
    .map(argument => argument.split('='))
    .reduce((temp, current) => {
      temp[current[0].replace(/-|--/, '')] = current[1] || true;
      return temp;
    }, {})
  return params;
}

module.exports = commandLinArgvParser;
