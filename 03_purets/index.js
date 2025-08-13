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
var pUser = /** @class */ (function () {
    function pUser(email, name) {
        this.email = email;
        this.name = name;
        this.city = "jaipur";
        this.email = email;
        this.email = name;
        this.city = this.city;
    }
    return pUser;
}());
var dipti = new pUser("d@d.com", "dipti");
//dipti.city cannot be accessed
