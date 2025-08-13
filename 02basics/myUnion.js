var score = 33;
score = 44;
score = "55";
var hitesh = { name: "hitesh", id: 1234 };
hitesh = { username: "hc", id: 2024 };
// function getDB_id(id:number|string){
//     //making some api calls
//     console.log(`DB id is:${id}`)
// }
getDB_id(3);
getDB_id("3");
function getDB_id(id) {
    if (typeof id === "string") {
        id.toLowerCase(); //Property 'toLowerCase' does not exist on type 'string | number' Property 'toLowerCase' does not exist on type 'number'.
    }
    if (typeof id === "number") {
        id + 2;
    }
}
//array
var data1 = [1, 2, 3];
var data2 = ["1", "2", "3"];
var data3 = [1, 2, 3, "8"];
var pi = 3.14;
