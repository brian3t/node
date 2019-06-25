function askFoo() {
    return new Promise(function (resolve, reject) {
        resolve('foo');
    });
}

function run(generator) {
    var it = generator();

    function go(result) {
        //this is the generator's result
        if (result.done) return result.value

        return result.value.then(value => go(it.next(value)),
            error => go(it.throw(error))
        )
    }

    go(it.next());
}

run(function* () {
    // improve: errors?
    var foo = yield askFoo();
    console.log(foo);
});


