const actions = {}

function createConstant(obj) {
  function addPath(obj, path) {
    Object.keys(obj).forEach((key) => {
      const curPath = path ? path + '.' + key : key;
      if (typeof obj[key] == "string") {
        obj[key] = curPath;
      } else {
        addPath(obj[key], curPath)
      }
    });
  }
  return addPath(obj, "")
}

createConstant(actions);

module.exports = actions;
