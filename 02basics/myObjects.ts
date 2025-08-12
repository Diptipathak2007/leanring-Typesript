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


type User={
    name:string;
    email:string;
    isActive:boolean
}
function CreateUser(user:User){
    return {name:"",email:"",isActive:true}
}
CreateUser({name:"",email:"",isActive:true})


export {};

