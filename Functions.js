function m1() {
    console.log("m1() called");
}
m1();
function welcome() {
    console.log("Welcome to Odisha ");
}
function sum(x, y) {
    return x + y;
}
welcome();
var result = sum(10, 20);
console.log(result);
console.log("---------------------Named Function--------------------------");
var resultt = function (x, y) {
    return x + y;
};
var s = resultt(30, 40);
console.log(s);
console.log("---------------------==Anynomus Function--------------------");
function fullname(fname, lname) {
    return fname + lname;
}
var yo = fullname("liton", "sahoo");
console.log(yo);
console.log("----------------------------------------------------------------------");
function greet(msg, name) {
    return msg + name;
}
var q = greet("hello", "liton");
var w = greet("hello");
console.log(q);
console.log(w);
console.log("-------------------Optional Prameter-------------------------");
function yoo(name, msg) {
    if (msg === void 0) { msg = "hi"; }
    return name + msg;
}
var p = yoo("liton");
var o = yoo("liton", "Welcome to shimla");
console.log(p);
console.log(o);
