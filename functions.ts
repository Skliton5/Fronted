function m1(){
    console.log("m1() called");
}
m1();

function welcome(){
    console.log("Welcome to Odisha ");
}
function sum(x:number ,y:number):number{
    return x+y;

}
welcome()
let result=sum(10,20);
console.log(result);

console.log("---------------------Named Function--------------------------");


let resultt = function(x:number,y:number):number{
    return x+y;
}
let s =resultt(30,40);
console.log(s);

console.log("---------------------==Anynomus Function--------------------");

function fullname(fname:string ,lname:string):string{
    return fname+lname;
} 
let yo=fullname("liton","sahoo");
console.log(yo);
console.log("----------------------------------------------------------------------");

function greet(msg:string,name?:string) : string{
    return msg+name;

}
let q=greet("hello","liton");
let w=greet("hello");
console.log(q);
console.log(w);
console.log("-------------------Optional Prameter-------------------------");

function yoo(name:string , msg:string="hi"): string{
    return name + msg;
}
let p= yoo("liton");
let o=yoo("liton","Welcome to shimla");
console.log(p);
console.log(o);


