//test1
function receivesAFunction(spy) {
    spy();
}
    function spy() {
        console.log("This is the spy function!");      
}
receivesAFunction(spy);

//test2
function returnsANamedFunction(fn) {
    function fn() {
        console.log("This is the fn");
    }
    return fn;
}
returnsANamedFunction();

//test3
function returnsAnAnonymousFunction() {
    return function() {
        console.log("This is an anonymous function");        
    }
}
returnsAnAnonymousFunction();