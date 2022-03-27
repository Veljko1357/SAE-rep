var student = {
    age: 23,
    name: "Milos",
    surname: "Lazarevic",
    grade: 1,
    currentModule: "4300FrontEnd"
}

function invertObject(oldObject) {
    var newObject = {};    
    


    for (var key in oldObject) {
        newObject[oldObject[key]] = key;
    }

    return newObject;
}

var invertedStudent = invertObject(student);
console.log(invertedStudent)