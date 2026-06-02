// DAY -1
//Callback
//Example -1
// console.log("Starts");

// setTimeout(function cbT(){
// console.log("Callback SetTimeout");
// },5000);

// fetch("https://6942677e69b12460f311075f.mockapi.io/details")
// .then(function cbf(){
//     console.log("CB Netflix");
    
// })


//Example-2
// function a(b){
//     console.log(" i am from a");
//     b();  
// }
// a(function b(){
//     console.log(" iam from b");
    
// });

// console.log("End");

// console.log("Start");
//  const doc=document.getElementById("btn")
// .addEventListener("click",function cb(){
//     console.log("callback");
    
// });
// console.log("End");

//Example -3

// function fetchData(callback) {
//   console.log("Fetching data...");

//   setTimeout(() => {
//     callback("Data received");
//   }, 2000);
// }

// fetchData((abi) => {
//   console.log(abi);
// });


//Promise
 //Example 1
// function fetchData() {
//   return new Promise((resolve, reject) => {
//     console.log("searching data");

//     setTimeout(() => {
//       resolve("Data received");
//     }, 2000);
//   });
// }

// fetchData()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//Example-2

// function checkLogin(username, password) {
//   return new Promise((resolve, reject) => {
//     console.log("Checking login...");

//     setTimeout(() => {
//       if (username === "admin" && password === "1234") {
//         resolve("Login successful ");
//       } else {
//         reject("Invalid username or password");
//       }
//     }, 2000);
//   });
// }

// // Call the function
// checkLogin("admin", "12434")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });


  //Async/await

  //Example-1

//  function checkLogin(username, password) {
//   return new Promise((resolve, reject) => {
//     console.log("Checking login...");

//     setTimeout(() => {
//       if (username === "admin" && password === "1234") {
//         resolve("Login successful ");
//       } else {
//         reject("Invalid credentials ");
//       }
//     }, 2000);
//   });
// }

// // Using async/await

// async function loginUser() {
//   try {
//     const result = await checkLogin("admin", "1234");
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// }

// loginUser();

//Example-2

function emailLogout(username,password){
    return new Promise((resolve,reject)=>{
        if(username == "abi" || password == 321)
             console.log("logout sucessfull");
        else
            console.log("login again");
                 
    })
}
async function cofirmLogout(){
    try{
      const result =await emailLogout("abi","321");
      console.log(result);
      
    }catch(error){
        console.log(error);
    
    }
}
cofirmLogout();





