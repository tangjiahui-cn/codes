/**
 * 手写Symbol
 *
 * At 2023.09.25
 * By TangJiaHui
 */

const ISymbol = (function () {
  function ISymbol(desc) {
    if (this instanceof ISymbol) {
      throw new TypeError("Symbol is not a constructor");
    }

    const symbol = Object.create({
      toString() {
        return `Symbol(${desc || ""})`;
      },
      valueOf() {
        return this;
        // throw new Error("Cannot convert a Symbol value");
      },
    });

    return symbol;
  }

  // Symbol 静态方法
  const cache = {};

  ISymbol.for = function (key) {
    return cache[key] || (cache[key] = ISymbol(key));
  };

  ISymbol.keyFor = function (symbol) {
    for (const key in cache) {
      if (cache[key] == symbol) {
        return key;
      }
    }
    return;
  };

  return ISymbol;
})();

console.log("-->", ISymbol.keyFor(ISymbol.for("11"))); // '11'
console.log("-->", ISymbol("11") === ISymbol("11")); // false
console.log("-->", ISymbol.keyFor("11") === ISymbol.keyFor("11")); // true
