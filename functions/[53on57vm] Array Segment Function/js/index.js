
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function myFunction(arrs, n = 1) {
    return arrs.splice(0, n)
}

var result = myFunction(arr)
console.log(result)