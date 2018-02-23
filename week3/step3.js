//1-sum of the three arguments. 
function sum(x, y, z) {
    return (x + y + z);
}
console.log(sum(3, 4, 5));
console.log("\n")
//2-
function colorCar(color) {
    return ("a " + color + " car")
}
console.log(colorCar("red"));
console.log("\n")
//3-
let obj = {
    name: "nour",
    age: 25
};

function printObj(obj) {
    return (obj.name + " " + obj.age);
}
console.log(printObj(obj))
console.log("\n")
//4-
function vehicleType(color, code) {
    if (code === 1) {
        console.log("a " + color + " car");
    } else {
        console.log("a " + color + " motorbike");
    }
}
vehicleType("red", 1)
vehicleType("blue", 2)
console.log("\n")
//5-
console.log(3 === 3);
console.log("\n")
//6-
function vehicle(color, age, type) {
    if (age <= 1 && type <= 5) {
        console.log("a " + color, " used", " car");
    } else {
        console.log("a " + color, " new", " motorbike");
    }
}
vehicle("blue", 2, 6);
console.log("\n")
//7-
const vehicleList = ["motorbike", "caravan", "bike", "scooter", "car"];
console.log("\n")
//8-
console.log(vehicleList[2]);
console.log("\n")
//9-
function vehicle(color, age, li) {
    let vehicleList = ["motorbike", "caravan", "bike", "scooter", "car"];
    if (age <= 1) {
        console.log("a " + color + " New " + vehicleList[li]);
    } else {
        console.log("a " + color + " Used " + vehicleList[li]);
    }
}
vehicle("blue", 1, 1);
console.log("\n")
//10-
let adv = " ";
for (let index = 0; index < vehicleList.length; index++) {
    adv = adv + vehicleList[index] + "s" + ", ";
}
console.log(`Amazing Joe's Garage, we service`, adv + " .");
console.log("\n")
//11-
console.log(vehicleList.push('bus'));
console.log(vehicleList);
console.log("\n")
//12-
const emptyObj = [{}, {}, {}];
console.log("\n")
//13-
let teachers = ['Phillip', 'Unmesh', 'Hardet', 'Keven', 'Samir', 'Mauro'];
console.log("\n")
//14-
teachers = {
    Phillip: ['HTML', 'Css'],
    Unmesh: ['command line'],
    Hardet: ['HTML', 'Css', 'Git', 'JavaScript'],
    Kevin: ['HTML', 'Css', 'Git', 'JavaScript'],
    Samir: ['JavaScript', 'Git'],
    Mauro: ['JavaScript']
}
console.log(teachers);
console.log("\n")
//15-
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

function arraysEquality(arr1, arr2) {
    if (arr1.length === arr2.length)
        return true;
    for (let i = arr1.length; i--;) {

        if (arr1[i] === arr2[i])

            return true;
        for (let o = arr1.length; o--;)
            if (typeof arr1[o] === typeof arr2[o])
                return true;
    }
    return false;
}
console.log(arraysEquality(x, y));
console.log(arraysEquality(x, z));
console.log(arraysEquality(z, y));
console.log('\n');
//16-
let o1 = {
    foo: 'bar'
};
let o2 = {
    foo: 'bar'
};
let o3 = o2;
console.log(o1);
console.log(o2);
console.log(o3);
console.log('\n');
o2.foo = 'nour';
console.log(o3);
console.log('By changing o2, o3 will change too ');
o1.foo = 'nour2';
console.log(o3);
console.log('By changing o1, o3 will not change ');
console.log('the order of o3 = o2 or o2 = o3 will be matter ');
console.log('\n');
//17-
let bar = 42;
console.log("it will returning string because type of 42 is number and type of number is string");
console.log(typeof typeof bar);