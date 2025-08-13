interface IUser{
    readonly db_id:number
    email:string,
    userID:number,
    googleID?:string,
    //startTrial:()=>string
    startTrial():string
    getCoupon(couponname:string):number
}
interface IUser{
    githubToken:string,

}
interface Admin extends IUser{//extending an existing interface
   role:"admin"|"ta"|"learner"
}
const hitesh:IUser={db_id:22,email:"h@h.com",userID:2211,startTrial:()=>{return "trail started"},getCoupon:(name:"hitesh")=>{return 19},githubToken:"23"}
hitesh.email="h@hc.com"
//in an interface u can add new fields to an existing sequence and a type cannot be changed after created