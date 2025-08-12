"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "hitesh",
    email: "hitesh@lco.dev",
    isActive: true
};
function createUser(_a) {
    var name = _a.name, isPaid = _a.isPaid;
    console.log("User created: ".concat(name, ", Paid: ").concat(isPaid));
}
createUser({ name: "hitesh", isPaid: false });
function createCourse() {
    return {
        name: "TypeScript Mastery",
        isPaid: true
    };
}
