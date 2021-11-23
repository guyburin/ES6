//Promise ( Call back hell )

// // --resolve

// const promiseA = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Guy"); //resolve = success and return Guy
//     }, 1000);
// });

// promiseA.then((val) => console.log("Promise :", val));//use.then check success
// console.log("Wait Promise");// frist show , Promise is asynchronous 


// --reject
// const promiseB = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("Error Test.");  //return "Error Test."
//     }, 250) 
//   }) 

//   promiseB.catch((errorMessage) => {//use .catch check false
//     console.log("Error : " + errorMessage); //แสดงผลข้อความเมื่อล้มเหลว
//   });

// --resolve and reject

const promiseC = new Promise((resolve, reject) => {
    let num = 1

    if (num == 1) {
        resolve(num);
    } else {
        reject(`${num} != 1`)
    }
})
promiseC.then((msg) => console.log("Success: " + msg))
promiseC.catch((msg) => console.log("Error: " + msg));

//   Call back hell
firstFunction(args, function () {
    secondFunction(args, function () {
        thirdFunction(args, function () {
            // And so on…
        });
    });
});