/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/
function promisifiedSetTimeout(n){
    return new Promise(function (resolve) {
        setTimeout(resolve, n * 1000);
    });
}
function wait(n) {
   return  promisifiedSetTimeout(n)
}


module.exports = wait;
