var Score = [];
var names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
//identityThree("hitesh")
function identityFour(val) {
    return val;
}
identityFour({ brand: "gym", type: 22 });
function getSearchProducts(products) {
    //do some database operations
    var myIndex = 3;
    return products[myIndex];
}
var getMoreSearchProducts = function (products) {
    //do some database operation
    return products[4];
};
