const spy = x => console.log(x);

function receivesAFunction (spy) {
    spy();
}

function returnsANamedFunction () {
    return function named () {
        console.log('I am named.')
    }
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log('I am anonymous.')
    }
}