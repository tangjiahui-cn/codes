/**
 * instanceof
 *
 * @author TangJiaHui
 * @date 2024/9/19
 */

function iInstanceOf(obj, constructor) {
  if (!obj || typeof obj !== "object") return false;
  if (!constructor || typeof constructor !== "function") return false;
  let proto = obj.__proto__;

  while (proto) {
    if (proto === constructor.prototype) return true;
    proto = proto.__proto__;
  }

  if (typeof constructor[Symbol.hasInstance] === "function") {
    return constructor[Symbol.hasInstance](obj);
  }

  return false;
}

console.log(iInstanceOf([], Array));
console.log([] instanceof Array);
console.log(iInstanceOf([], Object));
console.log([] instanceof Object);
