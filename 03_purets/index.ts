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
class pUser{
    
    private readonly city:string="jaipur"
    constructor(public email:string,public name:string){
        this.email=email
        this.email=name
        this.city=this.city
    }
}
const dipti=new pUser("d@d.com","dipti")
//dipti.city cannot be accessed