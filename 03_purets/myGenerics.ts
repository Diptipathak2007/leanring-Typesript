const Score:Array<number> =[]
const names:Array<string> =[]
function identityOne(val:boolean|number):boolean|number{
    return val
}
function identityTwo(val:any):any{
    return val
}
function identityThree<Type>(val:Type):Type{//take anything as input but return the output of the same time
    return val;
}
//identityThree("hitesh")
function identityFour<T>(val:T):T{
    return val;
}
interface bottle{
    brand:string,
    type:number
}
identityFour<bottle>({brand:"gym",type:22})

function getSearchProducts<T>(products:T[]):T{
    //do some database operations
    const myIndex=3
    return products[myIndex]
}
const getMoreSearchProducts=<T>(products:T[]):T=>{
    //do some database operation
    return products[4]
}