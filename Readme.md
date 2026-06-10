!! Day - 1 !!
  =========

1. Event Loop
=>The Event Loop is what makes Node.js asynchronous.
=>JavaScript runs in single thread
Event loop manages:
 =>Call Stack
 =>Callback Queue
 =>Microtask Queue

=>The Event Loop in JavaScript (especially in Node.js and browsers) is the mechanism that handles asynchronous operations.
It continuously checks:
1.Call Stack → currently executing code
2.Task Queues → pending callbacks/tasks
3.Executes tasks in specific phases

The Node.js event loop has 6 main phases:

┌───────────────────────────┐
│           timers          │
├───────────────────────────┤
│     pending callbacks     │
├───────────────────────────┤
│       idle, prepare       │
├───────────────────────────┤
│           poll            │
├───────────────────────────┤
│           check           │
├───────────────────────────┤
│      close callbacks      │
└───────────────────────────┘











2. Callbacks
 => A callback is a function passed into another function.
-----------------------------------
3.Promise
  =>Promises solve callback problems.
States:
  1.Pending
  2.Resolved
  3.Rejected
  ---------------------------------
4. Async / Await
    => Best way to handle async code.  
------------------------------------------
5.Streams 
  =>Streams = process data in chunks (piece by piece) instead of loading everything at once.
 Example:
   ❌ Without stream → load full 1GB file into memory
   ✅ With stream → read 64KB chunks → faster & memory efficient
-----------------------------------
6.Worker Threads = run heavy tasks in separate threads (parallel)
Normally:
   Node.js runs on single thread
   Heavy task → blocks everything ❌
With Worker Threads:
   Heavy task → runs in background thread ✅
   Main thread → continues handling requests

Why we use Worker Threads?
 To handle:

 ->CPU-heavy tasks
 ->Large calculations
 ->Image processing
 ->Encryption

 REFERENCE :Akshay saini
==========================================================================
 DAY-2
 !!---Error handling:---!!


1 Synchronous Error Handling
 => Errors that happen immediately during execution
 Handled using: try...catch
  try {
  JSON.parse("invalid");
} catch (err) {
  console.log("Error:", err.message);
}

2.Callback-based Error Handling
-> Old Node.js style (error-first pattern)

3.Promise-based Error Handling
 -> Modern approach using .then() and .catch()

4.Async/Await Error Handling
 -> Best and cleanest method
5.EventEmitter Error Handling
  -> Used in streams, servers, etc.
6.Custom Error Handling (Advanced)
  -> Create your own error classes

| Type         | Used For          | Method              |
| ------------ | ----------------- | ------------------- |
| Synchronous  | Immediate errors  | try-catch           |
| Callback     | Async (old style) | (err, data)         |
| Promise      | Async             | .catch()            |
| Async/Await  | Async (modern)    | try-catch           |
| EventEmitter | Events/streams    | .on('error')        |
| Global       | Unhandled errors  | process.on()        |
| Custom       | Structured errors | class extends Error |


--------------------------------------------

!!---Streams---!!

->Data is processed piece by piece (chunk by chunk) 
->Faster + memory efficient 
| Type      | Description                 |
| --------- | --------------------------- |
| Readable  | Read data (file, request)   |
| Writable  | Write data (file, response) |
| Duplex    | Read + Write                |
| Transform | Modify data while streaming |

--------------------------------------------

!!---Worker Threads:---!!

 ->Worker Threads in Node.js are a feature that allows you to run JavaScript code in parallel threads, separate from the main thread.

 ->Normally, Node.js is:  Single-threaded (one main thread)
Uses event loop for async tasks

👉 Problem: CPU-heavy tasks (like large loops, calculations)
These tasks block the main thread ❌

👉 Solution: Use Worker Threads to run heavy tasks in background threads ✅
---------------------------------------------
!!---Clustering----!!
  
=>Clustering in Node.js is a technique to run multiple instances of your app so you can use all CPU cores instead of just one.
  
 Why Clustering?
  ->By default: Node.js uses only 1 CPU core 

 -> With clustering: It uses multiple cores ,Handles more requests 

 REFERENCE :Akshay saini,Chatgbt
----------------------------------------------------
**!!!---DAY 3---!!!**

**Topics learned:**

1.Classes & Objects (ES6):
  ->Created a User class with constructor, instance methods, and static properties.
  ->Implemented login/logout functionality and tracked total users using static methods.
2.Static Methods & Properties
  ->Learned how static variables (userCount) and methods work at the class level.
3.Inheritance
  ->Implemented a PaidUsers class extending the User class.
  ->Used super() to inherit properties and added new features like storage.
     Practiced method overriding.
4.Method Chaining
 ->Implemented chaining by returning this from methods.
5.Prototype
  ->Understood prototype-based inheritance in JavaScript.
   ->Added methods using User.prototype.
6.Encapsulation
   ->Built an Employee class with setter and getter methods to control access to data.
7.Getters & Setters
  ->Implemented getter and setter methods using a Temperature class.
8.Abstraction
  ->Created an Emp function to hide internal salary calculation logic and expose only required details.
9.Polymorphism
   ->Demonstrated method overriding using Father and Son classes with different implementations of the same method.
10.Event emitter 
 ->In Node.js, an Event Emitter is a core module that allows objects to communicate using events.
 =>It follows the publish–subscribe pattern:
->One part of the code emits (triggers) an event
->Another part listens (handles) that event

Reference :https://www.youtube.com/@RaghavPal
--------------------------------------

**!!!---DAY 4---!!!**


Date: 04 June 2026

1. Stream Large File

Learned how to handle very large files (up to 1GB) using Node.js Streams
without causing memory crashes.

Key Points: - Used Writable Streams to create a large file. - Used
Readable Streams to read the file chunk by chunk. - Avoided loading the
entire file into memory. - Improved application performance and memory
efficiency. - Implemented error handling for stream operations.

Benefits: - Low memory consumption. - Faster processing of large
files. - Suitable for production applications.

2. Logger Service

Learned how to build and use a Logger Service in Node.js.

Features: - INFO: Logs general application information. - ERROR: Logs
errors and exceptions. - DEBUG: Logs debugging information. - Write to
File: Stores logs in a file for future reference.

Benefits: - Easier debugging and monitoring. - Centralized logging
mechanism. - Better maintenance and troubleshooting.

3. Custom Event Emitter

Learned how Node.js EventEmitter works and implemented a custom
event-driven system.

Methods Implemented:

on() - Registers an event listener. - Executes every time the event is
emitted.

emit() - Triggers an event. - Passes data to registered listeners.

once() - Registers a listener that executes only one time. -
Automatically removes itself after execution.

Practical Usage: - Triggered file creation events. - Managed application
events using an event-driven approach. - Improved code modularity and
flexibility.

----------------------------------------------------------

**!!!----DAY-5 ----!!!**
**TypeScript**

1. Introduction to TypeScript
What is TypeScript?
  =>TypeScript is a superset of JavaScript that adds static typing and additional features to make applications more reliable and maintainable.

Benefits:
->Compile-time error checking
->Better code readability
->Improved IDE support and IntelliSense
->Easier debugging
->Better scalability for large applications
->Example
->let message: string = "Hello TypeScript";
->console.log(message);
2. Basic Data Types
1.Number:
 ->Used to store numeric values.
Ex:
let age: number = 25;
2.String:
 ->Used to store text values.
 Ex:
let name: string = "John";
3.Boolean
->Used to store true or false values.
ex:
let isActive: boolean = true;
4.Any
->Can hold any type of value.
Ex:
let data: any = "Hello";
data = 100;
data = true;
5.Unknown
->Safer alternative to any.
Ex:
let value: unknown = "Hello";
6. Arrays
->Arrays store multiple values of the same type.

let numbers: number[] = [1, 2, 3, 4];
let names: string[] = ["John", "David"];

7.Alternative syntax:

let ids: Array<number> = [1, 2, 3];
8.. Tuples
  ->Tuples allow fixed-length arrays with specific types.

let employee: [number, string];

employee = [101, "John"];
9. Enums
 ->Enums represent a set of named constants.

enum Role {
  Admin,
  User,
  Guest
}

let myRole: Role = Role.Admin;
10. Functions

Functions can define parameter and return types.

function add(a: number, b: number): number {
  return a + b;
}
console.log(add(10, 20));

Output:
30
11. Arrow Functions
 ->Modern syntax for writing functions.

const multiply = (a: number, b: number): number => {
  return a * b;
};

console.log(multiply(5, 4));

Output:
20
12. Optional Parameters
 ->Parameters can be marked as optional using ?.
ex:
function greet(name: string, age?: number) {
  console.log(`Hello ${name}`);
}

greet("John");
greet("John", 25);
13. Union Types
 ->A variable can store multiple types.
ex:
let id: string | number;

id = 100;
id = "EMP100";
14. Type Aliases
  ->Type aliases create reusable custom types.
ex:
type Employee = {
  id: number;
  name: string;
};

const emp: Employee = {
  id: 1,
  name: "John"
};
15. Interfaces
 ->Interfaces define the structure of objects.
Ex:
interface Customer {
  firstName: string;
  lastName: string;
  age: number;
  middleName: string;
}
Example:
interface Customer {
  firstName: string;
  lastName: string;
  age: number;
  middleName: string;
}

function greetUser(user: Customer) {
  return `Hello ${user.firstName} ${user.lastName}`;
}

function logUserDetails(user: Customer) {
  console.log(
    `User: ${user.firstName} ${user.lastName} ${user.middleName}, Age: ${user.age}`
  );
}

let user1: Customer = {
  firstName: "John",
  lastName: "Doe",
  middleName: "Francis",
  age: 29
};

console.log(greetUser(user1));
logUserDetails(user1);

Output:
Hello John Doe
User: John Doe Francis, Age: 29

16. Common Error Learned
 ->Property Name Mismatch
Incorrect:
interface Customer {
  middelName: string;
}

let user1 = {
  middleName: "Francis"
};

Error occurs because:

middelName !== middleName

Property names must match exactly.

Correct:

interface Customer {
  middleName: string;
}
//!!REFERENCE - https://youtu.be/jrFZkfDmq2I?si=iRB5V0BDAFBO7Co9

----------------------------------------------------------------

!!!!-----DAY6-------!!!!

----Topics Covered:-
1.Classes
2.Inheritance
3.Closures
4.Access Modifiers (public, private, protected)
5.Static Methods
6.Static Properties
7.Generics
8.Type Casting
9.Type Assertion
10.Intersection Types
----Key Takeaways:-
->Classes help organize code using Object-Oriented Programming (OOP).
->Inheritance promotes code reuse.
->Closures preserve state and enable data privacy.
->Access modifiers provide encapsulation and security.
->Static members belong to the class rather than instances.
->Generics create reusable and type-safe code.
->Type Casting and Type Assertion help handle unknown data safely.
->Intersection Types combine multiple interfaces into one powerful type.

----------------------------------------------------------

!!!!!-----DAY7-----!!!!

1. TypeScript Mini Project – POS System
  -> Worked on a TypeScript-based Inventory Management and POS System.
  ->Practiced creating classes, constructors, and objects.
   ->Fixed TypeScript compilation errors related to:
    ->Using types as values.
   ->Incorrect method arguments.
   ->Object structure validation.
   ->Improved understanding of TypeScript type checking and class implementation.
    
3. Express.js with TypeScript:-
Learned how to set up an Express.js application using TypeScript.
Installed and configured required packages:
   express
   typescript
   ts-node
   @types/express
   @types/node
Created a basic Express server in TypeScript.

!!!--Understood:-
Type definitions (@types)
Request and Response typing
TypeScript compilation and execution
Project structure for Express applications
5. Node.js Module Configuration
Explored module-related warnings in Node.js.

Learned the difference between:-
CommonJS (require)
ES Modules (import/export)
Understood the role of:
package.json
"type": "module"
---------------------------------------------------------------

!!!---DAY-8----!!

1. Introduction to Express.js
 -> Learned the basics of Express.js, a web framework for Node.js.
 -> Understood how to install and configure Express in a project.
 -> Explored the structure of an Express application.
2. Creating an Express Server
  -> Created a simple Express server.
  -> Configured routes and handled HTTP requests.
  -> Learned how to start the server and listen on a specific port.
  -> Tested server responses using a browser and API tools.
3. Mini Project Development
   -> Implemented small practice projects using Express.
  -> Created basic endpoints for handling requests and sending responses.
  -> Applied routing concepts learned during the session.
4. API Testing and Verification
   -> Learned different methods to test APIs.
   -> Verified API responses using testing tools.
   -> Checked request methods such as GET and POST.
   ->Validated status codes and response data.










