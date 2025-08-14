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

function getSearchProducts<T>(products:T[]):T{//<T,>is also correct and written in this way to ensure that it is the syntax of typescript
    //do some database operations
    const myIndex=3
    return products[myIndex]
}
const getMoreSearchProducts=<T>(products:T[]):T=>{
    //do some database operation
    return products[4]
}
interface Database {
    connection: string,
    username: string,
    password: string
}

function anotherFunction<T, U extends Database>(valOne:T, valTwo:U):object {
    return{
        valOne,
        valTwo
    }
}

// anotherFunction(3, {})

interface Quiz{
    name: string,
    type: string
}

interface Course{
    name: string,
    author: string,
    subject: string
}

class Sellable<T>{
    public cart: T[] = []

    addToCart(product: T){
        this.cart.push(product)
    }
}