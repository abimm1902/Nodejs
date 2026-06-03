!! Day - 1 !!
  =========

1. Event Loop
=>The Event Loop is what makes Node.js asynchronous.
=>JavaScript runs in single thread
Event loop manages:
 =>Call Stack
 =>Callback Queue
 =>Microtask Queue


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
