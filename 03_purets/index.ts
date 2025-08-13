// class pUser{
//     public email:string
//     name:string
//     private readonly city:string="jaipur"
//     constructor(email:string,name:string){
//         this.email=email
//         this.email=name
//         this.city=this.city
//     }
// }
// //class piiUser{
//     private _coursecount=1
//     private readonly city:string="jaipur"
//     constructor(public email:string,public name:string){
//         this.email=email
//         this.email=name
//         this.city=this.city
//     }
//     get getAppleemail():string{return `apple${this.email}`}
//     get coursecount():number{return this._coursecount}
//     set coursecounT(coursenum){if(coursenum<=1){throw new Error("course count should be more than one")}}
//     private deleteToken(){console.log("Token deleted")}
// }

// class subUser extends User{
//     isFamily:boolean=true
//     changecoursecount(){
//         this._coursecount=4//moment we change private to protected it means that variable can be eaccesses in the same class as well as any other class which inherits that same  class
//     }
// }

//const do0ipti=new piUser("d@d.com","dipti")
//dipti.city cannot be accessed

