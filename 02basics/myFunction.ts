function addTwo(num:number):number{
    //num.toUpperCase();//that is one of the problem we faces while we declare the variable with any type
    return num+2;
    //return "hello" the part after colon is ensuring that u are needed to return a number
}
function getUpper(value:string){
    return value.toUpperCase
}
function signUpUser(name:string,email:string,password:string,isPaid:boolean){}
let loginUser=(name:string,email:string,isPaid:boolean=false)=>{}//call back function where we can set the values to be default

// function getValue(myVal:number){
//     if(myVal>5){
//         return true;
//     }
//     return "200 OK"
//     //here we will face a problem that when we try to set the value that what the function should return it will lead to error cauz i have both the return types boolean as well as string
// }

const getHello=(s:string):string=>{
    return ""
}
const heroes=["thor","ironman","spiderman"]
heroes.map((hero):string=>{
    return `hero is ${hero}`
})
function consoleError(errmsg:string):void{
    console.log(errmsg)
}
function consoleError1(errmsg:string):never{
    throw new Error(errmsg);
}
addTwo(5);
getUpper("abcd");
loginUser("d","d@d.com")
signUpUser("dipti","diptipathak019@gmail.com","dipti@1234",true);
export{}