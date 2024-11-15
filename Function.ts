var Petname:string="Dog";
function setpetname() {
    var Petname:string="Lion";
    console.log("inside Function :: "+Petname);  
}
setpetname();
console.log("outside Function ::"+Petname)

console.log("-----------Function-------------")
var index=0;
for (var index = 0; index <=5; index++) {

    console.log("index inside For loop ::"+ index);   
}
console.log("index outside For loop ::"+ index);

console.log("--------------Var Keyword---------------------")

var index=0;
for (let index = 0; index <=5; index++) {
    console.log("index inside loop::"+ index);   
}
console.log("index outside loop::"+ index)

console.log("------------------let keyword---------------------------------")

let fruits:string[];
fruits=["Guava","Banana","Mango","Orange","Greaps"];
console.log(fruits);

console.log("---------------------------Array--------------------------------");


let person:Array<number| string | boolean|any>;
person=[98172,"liton",true,"male"];
console.log(person);
