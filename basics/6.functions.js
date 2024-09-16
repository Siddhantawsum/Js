// // Dates
// let myDate = new Date()
// console.log(typeof myDate);

// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());

// Create a function that logs out "Hi there , Siddhant" when called

let name="Siddhant"
let greeting="Hi there"

function greet() {
    console.log( greeting +","+name)
}
greet()

// Create two functions ,add2points()and remove1points() and have them add/remove points from myPoint variables

let myPoint=3

function add2points(){
    myPoint+=3
}
function remove1points(){
    myPoint-=1
}

add2points()
remove1points()
console.log(myPoint);
