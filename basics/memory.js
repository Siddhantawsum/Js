//Primitive data type
//String,Number,Boolean,null,undefined,Symbol,BigInt
// When we initialze a primitive data type to a variable its unchangable

//Non primitive data types(Reference)
//Array,Object,Function

const heros=['Shaktiman','Arjun Reddy','Johnson'];
let myObj={
    name:'John',
    age:30
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack Memory(primitive) ,Heap Memory(Non primitive)

let mywebname="Siddhant Bahuguna"
let another_name=mywebname
another_name='sid'
console.log(another_name);
console.log(mywebname);

let userOne ={
    email:'user.com',
    upi:"udr@maku.com",
}

let userTwo =userOne;

userTwo.email="Sid@gmail.com"
console.log(userOne.email)
console.log(userTwo.email);
;
