interface IUser{
    readonly db_id:number
    email:string,
    userID:number,
    googleID?:string,
    //startTrial:()=>string
    startTrial():string
    getCoupon(couponname:string):number
}
const hitesh:IUser={db_id:22,email:"h@h.com",userID:2211,startTrial:()=>{return "trail started"},getCoupon:(name:"hitesh")=>{return 19}}
hitesh.email="h@hc.com"