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
--------------------------------
!!!--DAY-9----!!!
!!----Date: 12 June 2026

Tasks Completed:-

1. Couchbase Database Learning
Explored the fundamentals of Couchbase, a distributed NoSQL document database.
Learned how Couchbase stores data in JSON document format instead of traditional tables and rows.
Studied the key components of Couchbase architecture, including:
Cluster
Node
Bucket
Scope
Collection
Understood the differences between SQL and NoSQL databases.
Learned the purpose and benefits of Couchbase in modern applications, such as scalability, high availability, and performance.

3. Couchbase Data Management Concepts
Learned about CRUD (Create, Read, Update, Delete) operations in Couchbase.
Practiced document insertion and retrieval using the Couchbase Node.js SDK.
Explored update and delete operations on Couchbase documents.
Understood how documents are identified using unique keys.

4. Replication and High Availability
Studied the concept of Replication in Couchbase.
Learned how Couchbase maintains multiple copies of data across nodes.
Understood the role of replication in ensuring data availability and fault tolerance during server failures.

5. Couchbase Capella (Cloud) Exploration
Signed in to Couchbase Capella Cloud.
Created and configured a bucket for data storage.
Explored bucket settings and storage configuration.
Learned the process of creating scopes and collections within a bucket.
Reviewed the steps required to create database credentials and whitelist IP addresses for secure access.

6. Node.js Integration with Couchbase
Learned how to connect a Node.js application to Couchbase Capella.
Studied the installation and usage of the Couchbase SDK.
Explored sample code for:
Database connection
Insert operation
Read operation
Update operation
Delete operation
Understood the workflow of accessing buckets, scopes, and collections from Node.js.

7. Git and GitHub Operations
Reviewed Git commands required for uploading projects to GitHub.
Practiced commands for:
Initializing a repository
Adding files
Creating commits
Connecting to a remote repository
Pushing code to GitHub
Learned the workflow for updating existing repositories with new changes.

Key Learnings:-
Couchbase is a distributed NoSQL database designed for high performance and scalability.
Buckets, scopes, and collections are used to organize data efficiently.
CRUD operations can be performed using the Couchbase SDK in Node.js.
Replication helps ensure data availability and fault tolerance.
Couchbase Capella simplifies cloud-based database management.
Git enables version control and efficient project collaboration.
Next Steps
Create scopes and collections in Couchbase Capella.
Establish a successful Node.js connection with Couchbase.
Implement complete CRUD APIs using Express and Couchbase.
Build a mini Inventory Management System using Node.js, Express, TypeScript, and Couchbase.
Explore N1QL queries and indexing concepts.
-------------------------------------------------------
!!!---DAY-11----!!!!
**End of Day Report – 15 June 2026**

**Tasks Completed:**

1. Learned Couchbase database fundamentals and document-oriented data storage.
2. Created and managed Couchbase bucket, scope, and collections.
3. Generated sample data for:

   * Products Collection
   * Users Collection
   * Orders Collection
4. Created bulk user and order documents with proper IDs:

   * User IDs (user101 – user130)
   * Product IDs (P101 – P110)
   * Order IDs (O101 – O120)
5. Developed CRUD operations using Couchbase Collection API:

   * insert()
   * get()
   * replace()
   * upsert()
   * remove()
   * exists()
6. Implemented query-based business functions:

   * getTopSellingProducts()
   * getMonthlyRevenue()
   * getCustomerPurchaseHistory()
7. Learned the concept of Document Lookup and its advantages over N1QL queries.
8. Studied Couchbase Replica concepts and high availability features.
9. Practiced GitHub project upload process and .gitignore configuration.

**Outcome:**
Improved understanding of Couchbase collections, document operations, data modeling, and integration with Node.js and TypeScript.
---------------------------------------------------
!!!-----DAY12----!!!!
**End of Day Report – 16 June 2026**

**Tasks Completed:**

1. Worked extensively with Couchbase Document Lookup operations.
2. Implemented and tested:

   * get()
   * exists()
   * lookupIn()
   * getAnyReplica()
   * getAllReplicas()
3. Learned how to retrieve specific document fields using lookupIn().
4. Explored the difference between:

   * Full document retrieval (get())
   * Sub-document retrieval (lookupIn())
5. Developed Couchbase connection setup using Node.js and TypeScript.
6. Created reusable database connection functions and collection access patterns.
7. Accessed Couchbase collections across multiple project files using exports and imports.
8. Resolved TypeScript issues:

   * Promise return type errors
   * Missing return statement errors
   * Collection access issues
9. Troubleshot Couchbase runtime issues:

   * LookupInSpec import errors
   * Unambiguous timeout errors
   * Collection connectivity verification
10. Learned Replica read operations and their practical use cases.
11. Practiced Git commands for project upload and file exclusion using .gitignore.

**Outcome:**
Gained hands-on experience with Couchbase Document Lookup APIs, replica operations, collection management, TypeScript integration, and project structure organization.
---------------------------------------


**Date:** 17-Jun-2026

# 1. Learned NestJS Basics

* Studied the fundamentals of NestJS framework.
* Understood the architecture and key concepts of NestJS.
* Learned about:

  * Controllers
  * Modules
  * Providers/Services
* Explored how NestJS is built on top of Node.js and Express/Fastify.
* Reviewed the benefits of using NestJS for scalable and maintainable backend applications.

 # 2. Sorting Task Completion

* Analyzed the sorting requirement.
* Implemented the sorting functionality successfully.
* Verified the sorting results through testing.
* Ensured the data is displayed in the required sorted order.

# Knowledge Gained

* Basic understanding of NestJS framework and its architecture.
* Improved knowledge of backend application structuring using modules and services.
* Enhanced understanding of sorting implementation and data handling.

------------------------------------------
**Daily Status Report – 18 June 2026**

**Tasks Completed:**

1. Analyzed sorting performance in Couchbase with different dataset sizes (small, medium, and large volumes of records).
2. Tested sorting execution time and observed the impact of increasing record counts on query performance.
3. Explored pagination techniques using `LIMIT` and `OFFSET` to handle large datasets efficiently.
4. Studied indexing concepts to improve sorting and query execution performance.
5. Started learning NestJS framework fundamentals.
6. Learned NestJS project structure, including Modules, Controllers, and Services.
7. Created a Student Module in NestJS and explored module integration concepts.
8. Worked on connecting NestJS applications with Couchbase using the Couchbase Node.js SDK.
9. Investigated dependency injection and module configuration in NestJS.
10. Troubleshot and resolved TypeScript and NestJS configuration errors during development.

**Key Learnings:**

* Sorting performance varies based on dataset size and indexing strategy.
* Pagination helps efficiently manage and retrieve large datasets.
* NestJS follows a modular architecture that improves code organization and maintainability.
* Couchbase integration in NestJS can be implemented through custom providers and services.

**Status:** Completed assigned learning and implementation tasks for the day.
----------------------------------------------
**End of Day (EOD) Report – 19 June 2026**

**Tasks Completed:**

1. Learned the basics of creating a Login Page in NestJS, including understanding controllers, modules, DTOs, and request handling.
2. Completed the task assigned by Vijay successfully related to String methods.
3. Completed the task assigned by Hari related to sorting records efficiently.
4. Analyzed and implemented effective sorting approaches for handling large datasets to improve performance and response time.
5. Tested and verified the sorting functionality to ensure accurate results.

**Learning & Progress:**

* Gained knowledge of NestJS authentication flow and login page structure.
* Improved understanding of optimizing record sorting for large volumes of data.
* Enhanced practical experience in backend development and data handling.

**Status:** Completed all assigned tasks and learning objectives for the day.

-------------------------------------------------------------------
**End of Day (EOD) Report – 22 June 2026**

=> Completed the programming task assigned by Vijay.
=> Learned JavaScript fundamentals, including primitive and non-primitive data types.
=> Practiced the typeof operator and understood return types for different data types.
=> Learned the differences between var, let, and const.
=> Studied Global Scope, Function Scope, and Block Scope with examples.
=> Practiced JavaScript comparison operators (== vs ===) and type coercion concepts.
=> Worked through multiple JavaScript related to arrays, objects, hoisting, scope, and type conversions.
=> Improved understanding of reference types by comparing arrays and objects.
=> Explored JavaScript string and array sorting techniques.
=> Practiced common JavaScript output-based  and analyzed their behavior.

Date:22/6/2026
1.

const array=["tea","bat","eat","atb","tab","ate"];

const obj={};

for(let string of array){
    const key=string.split('').sort().join('');
    
    if(!obj[key]){
        obj[key]=[];
    }
    obj[key].push(string);
}
const result = Object.values(obj).map(group => ({
  words: group
}));


 console.log(result);
 
output:

[
  { words: [ 'tea', 'eat', 'ate' ] },
  { words: [ 'bat', 'atb', 'tab' ] } 
]
-------------------------------------
2.
function flatten(arr) {
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      result.push(...flatten(item));
    } else {
      result.push(item);
    }
  }

  return result;
}

const input = [1, 2, [3, [4, 5]], 5, 9, 3, 3, 9, 22, [7, 9, 23, 5], 11];
const flatArr=flatten(input);
const uniqueArray = [...new Set(flatArr)].sort((a,b)=>a-b);

console.log(uniqueArray);

output:
[
  1, 2,  3,  4,  5,
  7, 9, 11, 22, 23
]

---------------------------------------------------
3.compare the data types. 

console.log(5 == "5");      // true
console.log(true == 1);     // true
console.log(null == undefined); // true
console.log(5 === "5");     // false
console.log(5 === 5);       // true
console.log(true === 1);    // false
console.log(5 != "5");      // false
console.log(5 != 6);        // true
console.log(5 !== "5");     // true
console.log(5 !== 5);       // false

let a = 10;
let b = "10";

console.log(typeof a); // "number"
console.log(typeof b); // "string"

console.log(typeof a === typeof b); // false
-----------
console.log([] == []);      // false
console.log([] === []);     // false

const a = [];
const b = a;

console.log(a == b);   // true
console.log(a === b);  // true

console.log(null == undefined);  // true
console.log(null === undefined); // false

console.log({} == {});   // false
console.log({} === {});  // false

const a = [1, 2, 3];
const b = [1, 2, 3];

console.log(JSON.stringify(a) === JSON.stringify(b));// true

console.log(NaN == NaN);    // false
console.log(NaN === NaN);   // false
console.log(Number.isNaN(NaN)); // true

| Value          | Data Type                | `typeof` Result                |
| -------------- | ------------------------ | ------------------------------ |
| `"Hello"`      | String (Primitive)       | `"string"`                     |
| `123`          | Number (Primitive)       | `"number"`                     |
| `true`         | Boolean (Primitive)      | `"boolean"`                    |
| `undefined`    | Undefined (Primitive)    | `"undefined"`                  |
| `Symbol()`     | Symbol (Primitive)       | `"symbol"`                     |
| `123n`         | BigInt (Primitive)       | `"bigint"`                     |
| `null`         | Null (Primitive)         | `"object"` ⚠️ (JavaScript bug) |
| `{}`           | Object (Non-Primitive)   | `"object"`                     |
| `[]`           | Array (Non-Primitive)    | `"object"`                     |
| `function(){}` | Function (Non-Primitive) | `"function"`                   |
| `new Date()`   | Date (Non-Primitive)     | `"object"`                     |
| `/abc/`        | RegExp (Non-Primitive)   | `"object"`                     |

"99" + 88  // "9988"
"99" - 88  // 11
"99" * 2   // 198
"99" / 3   // 33

4.var ,let, const difference
5.global scope,
----------------------------------------------------



**End of Day (EOD) Report – 23 June 2026**

->Learned and implemented authentication in NestJS.
->Completed the task assigned by Vijay.
->Implemented password hashing using bcrypt.
->Verified user credentials using bcrypt password comparison.
->Developed authentication flow for user login and validation.
->Retrieved and validated user details during authentication.
->Tested the authentication APIs and verified expected behavior.

Status: Task completed successfully. ✅
Ref link :https://github.com/abimm1902/Authentication_Nestjs.git

---------------------------------------------------------


   EOD Report – 24/06/2026

Task Given by Vijay: Authentication using bcrypt and user verification

Completed Tasks:

Created authentication functionality in NestJS.
Implemented password hashing using bcrypt while creating users.
Implemented password verification during login.
Created User APIs and tested them using Postman.
Worked with Couchbase collections for storing and retrieving user data.
Implemented get user functionality.
Handled validation and error responses in APIs.
Investigated and fixed Couchbase connection and document retrieval issues.
Performed Git setup and project configuration verification.

Issues Faced:

Faced Couchbase connection timeout issues.
Encountered user document retrieval issues due to key mismatches.
Resolved TypeScript validation and data type-related errors.

Status: Completed and tested authentication functionality with bcrypt. ✅
------------------------------------------------------------
EOD Report – 25 June 2026

Tasks Completed:

Developed and tested User Management APIs in NestJS.
Implemented user creation functionality with bcrypt password hashing.
Worked on login validation using email and password verification.
Developed user update functionality and handled validation checks.
Implemented reset password API with the following validations:
New password should not match the current password.
Users cannot reuse their last 3 passwords.
Password history maintenance logic implemented.
Worked on storing and managing password history in Couchbase.
Tested APIs using Postman with various request payloads.
Resolved issues related to document key structure (user::{id}).
Investigated and fixed TypeScript validation and error-handling issues.
Worked on retrieving user data along with associated user details from Couchbase collections.

Issues Faced:

Faced document retrieval and validation issues while updating user records.
Encountered TypeScript type-related errors (unknown type handling).
Addressed Couchbase query and collection access issues.

Learning/Research:

Explored password history management and secure reset password implementation using bcrypt.
Reviewed NestJS DTO validation and Couchbase document management practices.

Plan for Tomorrow:

Complete pending API validations and edge-case testing.
Perform end-to-end testing of authentication and password reset flows.
Optimize exception handling and code structure.
Continue debugging and refining Couchbase integration.

Status: Completed for the day ✅


--------------------------------------------
EOD Report – 26 June 2026

Tasks Completed:
=> Worked on dynamic user search functionality in the NestJS application.
Implemented conditional SQL query building using if statements.
Added search support for name and email using the LIKE operator.
Discussed improvements to dynamic query construction.
         =>Reviewed and understood dynamic query filtering.
Explained optional parameters such as location and limit.
Learned how queries are built conditionally based on the request parameters.

Status :-
         =>Search functionality implementation and query logic reviewed.
        =>Task completed successfully

-----------------------------------------------------
EOD Report – 29 June 2026

Tasks Completed:

Worked on the Role-Based Access Control (RBAC) implementation.
Implemented role-based authorization using Guards and custom decorators.
Configured role validation to restrict API access based on user roles.
Integrated authentication and authorization flow with protected APIs.
Reviewed and verified role permissions for different user operations.
Performed code review and debugging for role-based access implementation.

In Progress:

API testing is currently in progress and is not yet completed.
Validating role-based access for different user roles across all protected endpoints.

Plan for Tomorrow:

Complete API testing for all role-based endpoints.
Fix any issues identified during testing.
Perform end-to-end validation of authentication and authorization flow.

---------------------------------------------------


***EOD Report – 30 June 2026***

-> Studied and understood the NestJS project architecture and layered design.
-> Explored NestJS design patterns, focusing on implementing the User module using Controller, Service, Repository, and DTO layers.
-> Learned about NestJS decorators, including:
-> Class Decorators (@Module, @Controller, @Injectable)
-> Method Decorators (@Get, @Post, @Put, @Patch, @Delete, @UseGuards, @UsePipes, etc.)
-> Parameter Decorators (@Body, @Param, @Query, @Headers, @Req, @Res, etc.)
-> Property Decorators (@IsString, @IsEmail, @IsNotEmpty, @MinLength, @Inject, etc.)
-> Custom Decorators (@CurrentUser, @UserId, @UserRole)
-> Understood the implementation and purpose of API rate limiting using @Throttle(), including limit and ttl configurations.
-> Gained a better understanding of NestJS request flow and best practices for building maintainable APIs.


--------------------------------------------------------------
**EOD Report – 01 July 2026**

**Tasks Completed:**

* Learned the **Factory Pattern** and **Strategy Pattern** in NestJS, including their purpose, implementation, and differences from Dependency Injection.
* Understood how **Factory Providers (`useFactory`)** are used in the POS-NestJS project for configuring JWT and Couchbase database connections.
* Analyzed and implemented the **Factory Pattern** in the POS-NestJS project by understanding the creation and injection of database providers such as the Couchbase cluster and collections.
* Successfully completed the assigned learning and implementation task for the day.

**Status:**

* ✅ Completed today's assigned task successfully.
-----------------------------------------------------------
**EOD 02 July 2026     – SOLID Principles**

* Learned the five SOLID principles:

  * **S** – Single Responsibility Principle (SRP)
  * **O** – Open/Closed Principle (OCP)
  * **L** – Liskov Substitution Principle (LSP)
  * **I** – Interface Segregation Principle (ISP)
  * **D** – Dependency Inversion Principle (DIP)
* Understood the purpose and benefits of each principle with simple examples.
* Learned how SOLID principles improve code maintainability, scalability, and testability.
* Explored how to apply SOLID principles in NestJS application development.

----------------------------------------------------------
**EOD Update – 03/07/2026**

* Learned the **UTC date and time format** and understood its importance for storing and handling dates consistently across different time zones.
* Explored date and time handling for doctor schedules, slots, and appointments.
* Started implementing the **Clinic Management Mini Project** in Go.
* Designed the project structure and began implementing core modules for user management, schedules, slots, and appointments.
* Worked on integrating the database and resolving implementation issues during development.
----------------------------------------------------------

**End of Day (EOD) Report – 06 July 2026**

### Tasks Completed

* Planned the architecture for the Clinic Management System using NestJS and Couchbase.
* Designed the project structure following a modular approach.
* Created the following modules:

  * Users
  * Schedules
  * Slots
  * Appointments
* Defined the database collections and relationships between Users, Schedules, Slots, and Appointments.
* Designed CRUD operations for all modules.
* Implemented role-based access flow for Admin, Doctor, and Patient.
* Planned JWT authentication and Role-Based Access Control (RBAC).
* Defined validation rules for Users, Schedules, Slots, and Appointments.
* Designed the API flow and project workflow.

**In Progress**

* Implementing CRUD APIs for Users, Schedules, Slots, and Appointments.
* Integrating Couchbase queries and repository layer.
* Testing APIs using Postman.

  github:https://github.com/abimm1902/Clinic-management.git

-----------------------------------------------------------

   
**EOD – 07 July 2026**

* Continued implementation of the Clinic Management System.
* Verified and tested API routes across the implemented modules.
* Updated the Slots module and refined its functionality.
* Implemented UTC-based date/time storage for scheduling-related data.
* Verified the Schedule creation flow and validated its functionality.
* Performed code verification and bug fixes for schedule and slot operations.
