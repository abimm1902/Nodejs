//DAY-6
//!!---CLASS
// // without Class 

// let user1={firstName:"john",lastName:"doe",age:34};
// let user2={firstName:"Jane",lastName:"smith",age:30};

// function greetUser(user:{firstName:string,lastName:string}){
//     return `Hello ${user.firstName} ${user.lastName}`;

// }
// function getUserAge(user:{age:number}){
//     return user.age;
// }
// console.log(greetUser(user1));
// console.log(getUserAge(user1));

// console.log(greetUser(user2));
// console.log(getUserAge(user2));


//with class
class User{
    firstName:string;
    lastName:string;
    age:number;

    constructor(firstName:string,lastName:string,age:number){
            this.firstName=firstName;
            this.lastName=lastName;
            this.age=age;
    }

    greet(){
        return `Hello,  ${this.firstName} ${this.lastName}  `
    }
    getAge(){
        return this.age;
    }
}

//creating instances
let user1=new User("John","doe",25);
let user2=new User("Jane","smith",24);

console.log(user1.greet());
console.log(user1.getAge());
console.log(user2.greet());
console.log(user2.getAge());


//!!---Inheritance
// // without Inheritance


// class User{
//     firstName:string;
//     lastName:string;
//     age:number;

//     constructor(firstName:string,lastName:string,age:number){
//         this.firstName=firstName;
//         this.lastName=lastName;
//         this.age=age;
//     }
//     greet(){
//         return `Hello ${this.firstName} ${ this.lastName}`;

//     }
//     getage(){
//         return this.age;
//     }
// }

// class Admin{
//     firstName:string;
//     lastName:string;
//     age:number;
//     role:string;

    
//     constructor(firstName:string,lastName:string,age:number,role:string){
//         this.firstName=firstName;
//         this.lastName=lastName;
//         this.age=age;
//         this.role=role;
//     }
//     greet(){
//         return `Hello ${this.firstName} ${ this.lastName} ${this.role}` ;

//     }
//     getage(){
//         return this.age;
//     }
//     manageUsers(){
//         return `Managing user with role ${this.role}`;
//     }

// }
// let user1=new User("john","doe",28);
// let admin1=new Admin("Alice","smith",27,"Adminstrator");


// console.log(user1.greet());
// console.log(user1.getage());


// console.log(admin1.greet());
// console.log(admin1.getage());
// console.log(admin1.manageUsers());

//with inheritance

class Person {
    firstName;
    lastName;
    age;
    constructor(firstName:string, lastName:string, age:number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    greet() {
        return `Hello ${this.firstName} ${this.lastName}`;
    }
    getage() {
        return this.age;
    }
}

class User extends Person{
    constructor(firstName:string, lastName:string, age:number) {
        super(firstName,lastName,age);
    }
}

class Admin extends Person{
    role:string;

    constructor(firstName:string,lastName:string,age:number,role:string){
       super(firstName,lastName,age)
      this.role=role
    }

    greet(): string {
        return `Hello, ${this.firstName} ${ this.lastName},Role: ${this.role}` ;
    }
       manageUsers() {
        return `Managing user with role ${this.role}`;
    }
}

let user1 = new User("john", "doe", 28);
let admin1 = new Admin("Alice", "smith", 27, "Adminstrator");

console.log(user1.greet());
console.log(user1.getage());

console.log(admin1.greet());
console.log(admin1.getage());
console.log(admin1.manageUsers());

//!!---Closure
// //without closures

// let counterValue =0;

// function incrementcounter(){
//     counterValue++;
// }

// function getcounterValue(){
//  return counterValue;
// }

// incrementcounter();
// console.log(getcounterValue()); //1

// incrementcounter();
// console.log(getcounterValue()); //2

// with colsure

function createCounter(){

    let counterValue=0;

    return {
        increment:function(){
            counterValue++;
        },
        getValue:function(){
            return counterValue;
        }
    };
}

const counter1=createCounter();
const counter2=createCounter();

console.log(counter1.getValue());
counter1.increment();
counter2.increment();
counter2.increment();
console.log(counter1.getValue(),`counter-1`);

console.log(counter2.getValue(),`counter-2`);

//!!---ClassModifier

// //without  class modifier
// class User{
//     name:string;
//     age:number;

//     constructor(name:string,age:number){
//         this.name=name;
//         this.age=age;
//     }
// }

// const user=new User("Alice" , 30);

// console.log(user.name);
// console.log(user.age);

// user.name="Bob";
// user.age=34;
// console.log(user.name);
// console.log(user.age);

// class modifier 

class User{
    private name:string;
     private age:number;

    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    public getName(){
        return this.name;
    }
    public getage(){
        return this.age;
    }
    public setName(name:string){
         this.name=name;
    }
    public setAge(age:number){
        if(age>0){

        this.age=age;
        }
    }
   
}


const user=new User("Abi",20);
console.log(user.getName());  //abi
console.log(user.getage());  //20

user.setAge(-10); //20
user.setName("eshu");

console.log(user.getName()); //eshu
console.log(user.getage());  //20
 
///!!!---StaticFunction
class User{
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name=name;
        this.age=age;

    }
    isAdult(){
        return this.age>=18;
    }
}

const user=new User("Alice",20);
console.log(user.isAdult());

class User{
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name=name;
        this.age=age;

    }
    static isAdult(age:number){
        return age>=18;
    }
}

// const user=new User("Alice",20);

console.log(User.isAdult(30),`30`);
console.log(User.isAdult(15),`15`);
///!!!--StaticProperty
//without static property

class User{
    name:string;
  
    constructor(name:string){
      this.name=name;
    }
     
    getName(){
        return this.name;
    }
}

let totalUsers = 0;

function createuser(name:string){
    totalUsers++;
    return new User(name);
};
const user1=createuser("Alice");
const user2=createuser("Bob");

console.log(user1.getName());
console.log(user2.getName());
console.log(totalUsers);

class User{
    name:string;
     static totalUsers:number =0;
    constructor(name:string){
      this.name=name;
      User.totalUsers++;
    }
     
    getName(){
        return this.name;
    }
    static getTotalUsers(){
       return User.totalUsers;
    }
}

console.log(User.totalUsers,'Users at start');

const user1=new User("Alice");
const user2=new User("Bob");

console.log(user1.getName());
console.log(user2.getName());
console.log(User.totalUsers,`Users at end`);;

//!!--Generics
// class NumberStack{
//     private item:number[]=[];

//     push(item:number){
//         this.item.push(item);
//     }
//     pop(){
//         return this.item.pop();
//     }
// }

// class StringStack{
//     private items:string[]=[];

//     push(item:string){
//         this.items.push(item);
//     }
//     pop(){
//          return this.items.pop();
//     }
    
// }

// const numberstack=new NumberStack();
// numberstack.push(1);
// numberstack.push(5);

// console.log(numberstack);
// console.log(numberstack.pop());

// const stringstack=new StringStack();

// stringstack.push("hello");
// stringstack.push("World");
// console.log(stringstack);

// console.log(stringstack.pop());

class Stack<T>{
    private items:T[]=[];

    push(item:T){
        this.items.push(item);
    }
    pop(){
         return this.items.pop()
    }
}

const numberStack=new Stack<number>();
numberStack.push(1);
numberStack.push(5);
console.log(numberStack.pop());


const stringStack=new Stack<string>();
stringStack.push("Hello");
stringStack.push("World")
console.log(stringStack.pop());

//!!---Typecasting---
interface User{
    name:string;
    age:number;
}

const jsonData='{"name":"Alice","age":23}' ;
const user=JSON.parse(jsonData) as User;  //typecasting

console.log(`Name ${user.name}, Age: ${user.age}`);



//!!!----Type-Assertion---
const element=document.getElementById("myelemet") as HTMLInputElement;

element.value="Hello typescript";
element.name="input";

//!!____InterScetionTypes-----

interface Employee{
    name:string;
    id:number;
}

interface Admin{
    isAdmin:boolean;
    accesslevel:number;
}

type AdminEmployee =Employee & Admin;

let adminEmp:AdminEmployee={
    id:123,
    name:"Alice",
    isAdmin:true,
    accesslevel:2
}
console.log(adminEmp);



































