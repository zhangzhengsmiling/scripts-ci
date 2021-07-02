class Entry {

  entry = '';

  constructor(entry) {
    this.entry = entry;
  }

  toString() {
    if(Array.isArray(this.entry)) {
      console.log(this.entry)
      return `entry: [\n${
          this.entry
            .map(e => e.replace(/(.*)/, "'$1'"))
            .join(',\n')
        }\n],`
    } else if (this.entry instanceof Object) {
      return `entry: [
        ${
          Object.keys(this.entry)
            .reduce((temp, key) => {
              return tmep + key + ':' + this.entry[key] + ',\n';
            }, '')
        }
      ]`
    }
    return `entry: '${this.entry}',`;
  }

}

module.exports = Entry;
