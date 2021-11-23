let person = { nickname: "Guy", fullname: ["Burin", "Panchat"], firstName: "Burin", lastName: "Panchat" };
let { nickname, fullname, ...others } = person; 
console.log(others); //{ firstName: 'Burin', lastName: 'Panchat' }