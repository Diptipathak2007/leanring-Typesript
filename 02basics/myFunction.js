"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    //num.toUpperCase();//that is one of the problem we faces while we declare the variable with any type
    return num + 2;
    //return "hello" the part after colon is ensuring that u are needed to return a number
}
function getUpper(value) {
    return value.toUpperCase;
}
function signUpUser(name, email, password, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
}; //call back function where we can set the values to be default
// function getValue(myVal:number){
//     if(myVal>5){
//         return true;
//     }
//     return "200 OK"
//     //here we will face a problem that when we try to set the value that what the function should return it will lead to error cauz i have both the return types boolean as well as string
// }
var getHello = function (s) {
    return "";
};
var heroes = ["thor", "ironman", "spiderman"];
heroes.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function consoleError1(errmsg) {
    throw new Error(errmsg);
}
addTwo(5);
getUpper("abcd");
loginUser("d", "d@d.com");
signUpUser("dipti", "diptipathak019@gmail.com", "dipti@1234", true);
