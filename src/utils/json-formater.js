const jsonFormater = (space) => (object) => {
  return JSON.stringify(object, null, space);
}
module.exports = jsonFormater;
