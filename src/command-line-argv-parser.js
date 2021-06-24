const commandLinArgvParser = (argvlist) => {
  const [path, target, ...args] = argvlist;
  console.log(path, target);
  const params = args
    .map(argument => argument.replace(/^-/, ''))
    .map(argument => argument.split('='))
    .reduce((temp, current) => {
      temp[current[0]] = current[1] || true;
      return temp;
    }, {})
    console.log(params)
}

module.exports = commandLinArgvParser;
