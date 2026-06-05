//BAsic Types in TypeScript
//!--1.number
// let age:number =24;

//!--2.String
// var names:string="Abinya";
//var age:number=55;
  //var Bool:boolean=true;
// //Error
//names=age;
//Bool=names;
//age=Bool;

// console.log(names,age,Bool);

//!--3.boolean
// let isLoggedIn:boolean=true;
//4.Any
// let value:any="1234";
// value=true;
// value=3546;

////Duck Typing
//  //var complextype={name:"myname",id:1};
// complextype={id:2,name:"anothername"};
// //complextype={name:"mynameonly"}; //error:id is missing
// //complextype={address:"Address"}; //error:idand name is missing
// complextype={id:3,name:"abi"};
// console.log(complextype);

// //5.unknown
// let userInput:unknown;

// userInput="miller";
// userInput=false;

// //---Arrays

// var NumArray:number[]=[2,6,7,4];
// NumArray=[8,7,3,75,865];
// // NumArray=["fr","rg"]
// console.log(NumArray);

// //alternate syntax
// let  nums:Array<number>=[1,3,5];

// //----Tuples
 
// //Tuple allows fixed number of elements with specific types.
// let employee: [number, string];

// employee = [101, "Abi"];

//!---function creation

//  function add(a:number,b:number):number{
//     return a+b;
// }
// console.log(add("10","20"));

// function sub(a:number,b:number):number{
//     return a-b;
// }
// console.log(sub("10","200"));

// function mul(a:number,b:number):number{
//     return a*b;
// }
// console.log(mul(10,20));

// console.log(add(10, 20));

//!---Arrow Function

// let multiply=(a:number,b:number):number=>{
//     return a * b;
// }
// console.log(multiply(4,9));

//Optional Parameters

// function greet(name:String,age?:number){
//     console.log(name);
    
// }
// greet("abi");
// greet("abi",99);

//!!!--Default parameter

// var concatString=function(a:string,b:string,c:string="cc"){
//     return a+b+c;
// }
// console.log(concatString("x","y","z"));
// console.log(concatString("y","z"));

// //Interfaces -Interface defines the structure of an object.

// interface Customer{
//     firstName:string,
//     lastName:string,
//     age:number,
//     middleName:string
// }


// function greetUser(user: Customer){
//     return `Hello ${user.firstName} ${user.lastName}`;
// };

// function LogUserDetails(user: Customer){
//     console.log(`LogUser: ${user.firstName} ${user.lastName} ${user.middleName} , Age:${user.age}`);
// };

// let user1={firstName:"john",lastName:"Doe",middleName:"Frances",age:29};

// console.log(greetUser(user1));
// LogUserDetails(user1);


//!!!---Enum--
// enum Direction{
//     Up,
//     Dowm,
//     Left,
//     Right
// };

// function move(direction){
//     console.log(`moving ${Direction[direction].toLowerCase()}`);
    
// }
// move(Direction.Left);

