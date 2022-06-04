function add(a,b){
return a+b;
}
function subtract(a,b){
    return a-b;
    }
    function multiply(a,b){
        return a*b;
        }
        function divide(a,b){
            return a/b;
            }
function increment(p){
    p++;
    return p;
}
function decrement(p){
    p--;
    return p;
}
function makeInt(p) {
    let x = parseInt(p, 10);
    return x;
}
console.log(makeInt(5.79088));
function preserveDecimal(p) {
    let y = parseFloat(p);
    return y;
}

console.log(preserveDecimal('oops')); 