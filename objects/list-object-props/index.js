var student = { 
    name : "David Rayy", 
    sclass : "VI", 
    rollno : 12 };



const keys = Object.keys(student);

console.log(keys) 


keys.forEach((key, index) => {
    console.log(`${key}`);
});


for (var key in student) {
    console.log(key)
}