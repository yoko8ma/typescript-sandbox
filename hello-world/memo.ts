const multi = (n, m) => n * m;
console.log(multi(2, 4));

const curriedMulti = n => {
    return m => n * m;
}

console.log(curriedMulti(2)(4));

