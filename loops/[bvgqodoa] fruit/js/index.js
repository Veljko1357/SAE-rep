var arr = ["banana", "kiwi", "apple", "orange", "pineapple"];

console.log(arr);

arr.unshift("mango", "avocado");

console.log(arr);

arr.pop();

console.log(arr);

arr.push("pear", "cherry");

console.log(arr);

arr.splice(3, 2, "date", "grapes");

console.log(arr);

for(i = 0; i <= arr.length; i++){
    console.log(arr[i])
}
