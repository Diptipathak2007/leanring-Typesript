let score:number|string=33
score=44

score="55"
type User={
    name:string,
    id:number
}
type admin={
    username:string,
    id:number
}
let hitesh:User|admin={name:"hitesh",id:1234}
hitesh={username:"hc",id:2024}
// function getDB_id(id:number|string){
//     //making some api calls
//     console.log(`DB id is:${id}`)
// }
getDB_id(3)
getDB_id("3")
function getDB_id(id:number|string){
    if(typeof id==="string"){
        id.toLowerCase()//Property 'toLowerCase' does not exist on type 'string | number' Property 'toLowerCase' does not exist on type 'number'.
    }
    if(typeof id==="number"){id+2}
    
    
}

//array
const data1:number[]=[1,2,3]
const data2:string[]=["1","2","3"]
const data3:(string|number)[]=[1,2,3,"8"]
let pi:3.14=3.14
