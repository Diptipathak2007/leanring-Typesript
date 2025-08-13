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
var piiUser = /** @class */ (function () {
    function piiUser(email, name) {
        this.email = email;
        this.name = name;
        this._coursecount = 1;
        this.city = "jaipur";
        this.email = email;
        this.email = name;
        this.city = this.city;
    }
    Object.defineProperty(piiUser.prototype, "getAppleemail", {
        get: function () { return "apple".concat(this.email); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(piiUser.prototype, "coursecount", {
        get: function () { return this._coursecount; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(piiUser.prototype, "coursecounT", {
        set: function (coursenum) { if (coursenum <= 1) {
            throw new Error("course count should be more than one");
        } },
        enumerable: false,
        configurable: true
    });
    piiUser.prototype.deleteToken = function () { console.log("Token deleted"); };
    return piiUser;
}());
var do0ipti = new piUser("d@d.com", "dipti");
//dipti.city cannot be accessed
