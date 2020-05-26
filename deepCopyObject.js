/*
 * @author joke
 * @time 2020-05-26 09:47:44 周二
 * @desc 对象深拷贝
 */
function _deepCopy(obj) {
  let result = {};
  let instace = _isClass(obj);
  if (instace === "RegExp") {
    // regexp
    result = new RegExp(obj.toString().slice(1, -1));
  } else if (instace === "Date") {
    // date
    result = new Date(obj);
  } else {
    // object array
    for (let key in obj) {
      let temp = obj[key];
      let type = _isClass(temp);
      if (type === "Object") {
        result[key] = _deepCopy(temp);
      } else if (type === "Array") {
        result[key] = _copyArray(temp);
      } else {
        result[key] = temp;
      }
    }
  }
  return result;
}

function _copyArray(arr) {
  return arr.concat();
}
function _isClass(obj) {
  if (obj === null) return "Null";
  if (obj === undefined) return "Undefined";
  return Object.prototype.toString.call(obj).slice(8, -1);
}
