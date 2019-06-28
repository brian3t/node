function *flat (arr) {
    for (let element of arr)
    {
        if (typeof element === 'object'){
            yield *flat(element)
        } else {
            yield element
        }
    }
}

let A = [1, [2, [3, 4], 5], 6];
for (let f of flat(A)) {
    console.log( f );
}
// 1 2 3 4 5 6
