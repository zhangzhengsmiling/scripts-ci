#! /usr/bin/env node

const fs = require('fs');
const path = require('path');
const temp = fs.readFileSync(
  path.resolve(__dirname, 'temp.txt')
)
.toString();
const Entry = require('./entry');

const PATH_OUTPUT = path.resolve(__dirname, 'output.config.js')
// TODO: 解开注释
// if (PATH_OUTPUT)
//   throw new Error('file already exists...');

const requireBlockGenerator = (requireConfig) => {
  return Object.keys(requireConfig)
    .reduce((temp, key) => {
      return `${temp}const ${key} = require('${requireConfig[key]}');\n`;
    }, '')
}

const configGenerator = (content) => {
  return `const config = {\n${content}\n}`
}

const requireString = requireBlockGenerator({
  SASS_LOADER: 'sass-loader',
  APP: 'app-config'
})

class Output {
  path = '';
  filename = '';
  
  constructor(path, filename) {
    this.path = path;
    this.filename = filename;
  }

  toString() {
    return 'output: {\n' +
    `path: '${this.path}',\n` +
    `filename: '${this.filename}',\n` +
    '},\n'
  }
}

const configString = configGenerator(`
  ${new Entry(['./src/main.js', './src/app.js'])}
  ${new Output('./out', 'bundle.js')}
  module: {
    rules: [
      {
        test: /.scss/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      }
    ]
  }
`);


const exportString = 'module.exports = config;'


const replaceBlock = (replaceConfig = {}) => {
  return (value) => {
    return value
      .replace('$require block$', replaceConfig.require || '')
      .replace('$config block$', replaceConfig.config || '')
      .replace('$export block$', replaceConfig.export || '');
  }
}

const str = replaceBlock({
  require: requireString,
  config: configString,
  export: exportString,
})(temp);

// const fsoutput = path.resolve(__dirname, 'output.config.js');
fs.writeFileSync(PATH_OUTPUT, str);
console.log('写入成功')

