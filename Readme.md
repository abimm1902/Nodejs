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

