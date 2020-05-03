var multi = function (n, m) { return n * m; };
console.log(multi(2, 4));
var curriedMulti = function (n) {
    return function (m) { return n * m; };
};
console.log(curriedMulti(2)(4));
