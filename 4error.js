function* upper(items) {
    for (let item of items) {
        try {
        } catch (outside_e) {
            console.log(`outside error: ${outside_e}`);
            yield null
        }
        yield 1
        // yield item.toUpperCase()
    }
}

var bad_items = ['a', 'B', 1, 'c'];
// var bad_items = ['a', 'B', 'c'];
let it = upper(bad_items)
// it.throw('oho')

let iter_next = null
while ((iter_next = it.next()) && (iter_next.done !== true)) {
    if (typeof iter_next.value !== 'string') {
        it.throw('hey be careful')
    }
    console.log(iter_next.value);
}
// want to log: A, B, null, C
