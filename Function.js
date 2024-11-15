var Petname = "Dog";
function setpetname() {
    var Petname = "Lion";
    console.log("inside Function :: " + Petname);
}
setpetname();
console.log("outside Function ::" + Petname);
console.log("-----------Function-------------");
var index = 0;
for (var index = 0; index <= 5; index++) {
    console.log("index inside For loop ::" + index);
}
console.log("index outside For loop ::" + index);
console.log("--------------Var Keyword---------------------");
var index = 0;
for (var index_1 = 0; index_1 <= 5; index_1++) {
    console.log("index inside loop::" + index_1);
}
console.log("index outside loop::" + index);
console.log("------------------let keyword---------------------------------");
var fruits;
fruits = ["Guava", "Banana", "Mango", "Orange", "Greaps"];
console.log(fruits);
console.log("---------------------------Array--------------------------------");
var person;
person = [98172, "liton", true, "male"];
console.log(person);
