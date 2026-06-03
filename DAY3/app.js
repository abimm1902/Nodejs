// import Car,{fillGas,repair} from "./car.js";

// let car1=new Car();
// car1.drive()
// fillGas()


//Prototype - In JS, every function has a property called Prototype
//By default this property is empty
//You can add properties and methods to it
//JavaScript has prototype based Inheritance


// //Class
//   // Class is a template of propertise and methods
//   //Static - commom variables/methods for class
//   //       - accessed with className
//   //ES6 - 

// class User{ // Base class,parent class
//      static userCount=0; 
//     constructor(name,age){
//         //instance variable
//         this.name=name;
//         this.age=age;
//         User.userCount++;
//     }
//     login(){
//         console.log('Hii' ,this.name);
//         console.log("you are logged in");
//     }
//     logout(){
//          console.log('Bye' ,this.name);
//         console.log("you are logged out");
//     }
//     static displaytotalUsers(){
//         console.log('Number of Users' +  User.userCount++);
        
//     }
// }

// let user1 =new User("adam",24)
// let user2 =new User("john",22)
// let user3 =new User("allen",26)
// user1.login();
// console.log(user1);
// console.log(User.userCount);
// User.displaytotalUsers();


// //2.Inheritance
// // derived class,child class
// class PaidUsers extends User{ 

//     constructor(name,age){
//         super(name,age);
//         this.storage=100;
//     }
//     message(){
//         console.log(" you have 100gb free storage");
//     }
//     //overriding
//     login(){
//         console.log("thank for your support");
//         return this;
//     }
// }
// let paidUser1=new PaidUsers("miller",35);
// paidUser1.login();
// paidUser1.message()
// PaidUsers.displaytotalUsers();


// //method chaining

// paidUser1.login().message()


// function User(name,age){
//     this.name=name;
//     this.age=age;
// }
// User.prototype.login=function(){
//     console.log(" Hii " , this.name);
//     console.log("you are logged in");
    
    
// }
// let User1=new User("john" , 25);
// User1.login()
// console.log(User1);

// //get and set

// class Temperature{
//     constructor(temp){
//         this._temp=temp;
    
//     }
//     get temp(){
//         return `${this._temp} deg celcius`
//     }
//     set temp(temp){
//         if(temp>100)
//              temp = 100
//             this._temp=temp;
//     }
// }

// let temp1=new Temperature(25);
// temp1.temp=150;
// console.log(temp1.temp);


//2.Encapsulation
  //->Keep data safe inside an object and control access.

class Employee{
    setEmpDetails(name,id,phoneNO){
        this.name=name;
        this.id=id;
        this.phoneNO=phoneNO;
    }
    getEmpName(){
        return this.name
    }
    getEmpId(){
        return this.id;
    }
    getEMpPhoneNo(){
        return this.phoneNO;
    }

}

let Emp1=new Employee();

Emp1.setEmpDetails("John",1002,1234567890);
console.log(Emp1.getEmpId());
console.log(Emp1.getEmpName());
console.log(Emp1.getEMpPhoneNo());


console.log(Emp1);






// class BankAccount {
//     constructor(name, balance) {
//         this.name = name;
//         let _balance = balance; // private variable

//         this.getBalance = function() {
//             return _balance;
//         };

//         this.deposit = function(amount) {
//             _balance += amount;
//         };
//     }
// }

// let user = new BankAccount("Abi", 1000);

// user.deposit(500);
// console.log(user.getBalance()); // 1500

//---Inheritance--//

// class vehicle{
//     setName(name){
//         this.name=name;
//     }
//     startEngine(){
//         console.log("Engine started for " + this.name);
//     }
//     stopEngine(){
//         console.log("Engine stoped for " + this.name);
        
//     }
// }

// class Toyato extends vehicle{
//     Topspeed(speed){
//         console.log('Top speed for ' +this.name + speed);
        
//     }
// }

// let myCar=new Toyato();

// myCar.setName("Camry")
// myCar.startEngine();
// myCar.stopEngine();
// myCar.Topspeed(500);


// --Polymorphism--//
//poly =many
//marph=forms
//polymorphism = many forms

    //=>polymorphism in object orirnted programing is
    //  the ability to create a variabl,a function, 
    // or an object that has more than one form.

// class Father{
//     constructor(name){
//         this.name=name;
//     }
//     cooking(){
//         console.log(" i like to cook briyani");
        
//     }
// }

// class Son extends Father{
//     cooking(){
//         console.log(" i like to cook sapathi");
        
//     }
// }

// let son=new Son("miller")
// console.log(son);
// son.cooking();

//--Abstraction--?/
  //=> An abstraction is a way of hiding the implementation 
  //details and showing only the functionality to the users.


  //An abstraction is a way of hiding the implementation details and showing only the functionality to the users
//Abstraction hides certain details and only show the essential features of the object.
//This approach improves understandability as well as maintainability of the code. 
  function Emp(name,age,baseSalary){
     this.name=name;
     this.age=age;
     this.baseSalary=baseSalary;

      let monthlyBonus=1000;

     let calculateFinalSalary=function(){
        let finalSalary=baseSalary+monthlyBonus;
        console.log("final salary is :" +finalSalary);
        
     }
     this.getEmpDetails=function(){
      console.log('name:' +this.name+ '|Age' +this.age);
      calculateFinalSalary();
     }
  }

let empl1=new Emp("John",30,20000);
empl1.getEmpDetails();
