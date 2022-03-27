var someString = "Velja"

String.prototype.stringSubset = function() {
    var subsets = [];
    

    for (var i = 0; i < this.length; i++) {
        for (var x = i + 1; x < this.length + 1; x++) {
            subsets.push(this.slice(i,x));
        }
    }

    return subsets;
}

console.log(someString.stringSubset());