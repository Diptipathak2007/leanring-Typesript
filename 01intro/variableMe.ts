let greetings:string="Dipti Pathak"
greetings.toLowerCase()
console.log(greetings)

//number
//let userId:number=334456
//userId.toExponential

let userId=334567.55
userId.toFixed()//you should not use this type reference in every case for example in this case typescipt is smart enough to judge it is a number

//boolean
let isLoggedin:boolean=false

let Hero;
function getHero(){
    return "thor"
}
Hero=getHero()

export{}