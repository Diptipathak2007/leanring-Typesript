const User = {
    name: "hitesh",
    email: "hitesh@lco.dev",
    isActive: true
};


function createUser({ name, isPaid }: { name: string; isPaid: boolean }): void {
    console.log(`User created: ${name}, Paid: ${isPaid}`);
}

createUser({ name: "hitesh", isPaid: false });
function createCourse(): { name: string; isPaid: boolean } {
    return {
        name: "TypeScript Mastery",
        isPaid: true
    };
}


// type User={
    
//     name:string;
//     email:string;
//     isActive:boolean
// }
// function CreateUser(user:User){
//     return {name:"",email:"",isActive:true}
// }
// CreateUser({name:"",email:"",isActive:true})


type User={
    readonly _id:string
    name:string;
    email:string;
    isActive:boolean
    credcarddetails?:number//this will help in not complaining whether it is given or not
}
let myUser:User={
    _id:"1234",
    name:"h",
    email:"h@h.com",
    isActive:false
}
myUser.email="h@gmail.com";
//myUser._id="1234";u can,t change this because it is a read only property

type cardNumber={
    cardNumber:string
}
type cardDetails=cardNumber&cardDate&{
    cvv:number
}

type cardDate={
    cardDate:string
}
export {};

