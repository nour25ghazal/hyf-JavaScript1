let x = 2;
let y = "hello";
let z = 15;
let a = "how are you";
console.log('The value of my variable x is: ' + x);
console.log('The value of my variable y is: ' + y);
console.log('The value of my variable z is: ' + z);
console.log('The value of my variable a is: ' + a);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);
console.log(typeof a);
if (typeof x == typeof y) {
    console.log("x and y same type")
} else {
    console.log("x and y not the same type")
}
if (typeof x == typeof z) {
    console.log("x and z same type")
} else {
    console.log("x and z not the same type")
}
if (typeof x == typeof a) {
    console.log("x and a same type")
} else {
    console.log("x and a not the same type")
}
if (typeof y == typeof z) {
    console.log("y and z same type")
} else {
    console.log("y and z not the same type")
}
if (typeof y == typeof a) {
    console.log("y and a same type")
} else {
    console.log("y and a not the same type")
}
if (typeof z == typeof a) {
    console.log("z and a same type")
} else {
    console.log("z and a not the same type")
}