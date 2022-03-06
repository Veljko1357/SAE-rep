
var arr = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];


var str = 'Hello World!'

var nully = null;

var empty = undefined;

function checkArray(variableName) {
    return Array.isArray(variableName);
}

console.log(checkArray(arr))
console.log(checkArray(str))
console.log(checkArray(nully))
console.log(checkArray(empty))

