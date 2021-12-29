// //  import {hello,data as d} from './sell.js';
// // import * as bundle from './sell.js';
// // import person from './customer.js';

// // console.log(person)
// // bundle.hello();

// //class and object
// class Customer{
//     constructor(n){
//         this.name = n;

//     }
//     //beautifull class property :) without this we can add property outside constructor class
//     age = 28;
//     buy(){
//         console.log("hello....");
//     }
// }
// // inheritence
// class GuestCustomer extends Customer{
//     hello(){
//         console.log(`${this.name}, hello`)
//     }
// }
// let customer1 = new GuestCustomer("Abhishek");
// console.log(customer1)
// customer1.buy();
// customer1.hello();

//Spread and rest operator(...)

//Spread
// let list = ["audi","honda"]
// let newlist = [...list,"tata",...list]
// console.log(newlist)

// let person = {
//     name:"Abhishe"
// }
// let newPerson = {
//     ...person
// }
// console.log(newPerson)

 //Rest operator
// function hello(...all){
//     console.log(all)
// }
// hello(1,2,3,3,4);
//outputs array  -> [1,2,3,3,4]


// //array destructuring
// let list = [ "audi","BMW","tata"]
// let [car1, ,car3] = list;
// console.log(car3)

//object destructuring
// let person = {
//     namee:"abhi"
// }
// let {namee} = person;
// console.log(namee)

// primitive type copies but references type references when assigned
// let x = 10
// let y = x 
// y = 50
// console.log(x,y)
// let obj = {
//     x:10
// }
// let obj1 = obj;
// obj1.x = 50
// console.log(obj.x)


// MAP 
// let arr =  [2,4,5,6]
// let arr2 = arr.map(function(x){
//     return x*2
// });
// let arr =  [2,4,5,6]
// let arr2 = arr.map((x)=> x*2);
// console.log(arr2)

//FILTER 
// let arr3 = arr.filter(x=> x%2 === 0)
// console.log(arr3)


