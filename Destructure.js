// - Destructure array object

// Array
let array = ["My", "name", "is", "Guy"]; // array[0] = My , array[1] = name
let [word1, word2] = array;
// -------------------------------------------------------------------------------
// let [word1, word2] = ["My", "name", "is", "Guy"]; same top
// -------------------------------------------------------------------------------
// let [word1,...word234] = ["My", "name", "is", "Guy"]; // Assigning the rest of an array
// -------------------------------------------------------------------------------
// let [word1,,,word4] = ["My", "name", "is", "Guy"]; // Skip in array
// -------------------------------------------------------------------------------
// let [word1,word2,word3,word4,word5 ="."] = ["My", "name", "is", "Guy"]; // set default values (if not set word5 = undefined)
// -------------------------------------------------------------------------------
// let word1 = "A";
// let word2 = "B";
// [word1,word2] = [word2,word1]; // Swap
// -------------------------------------------------------------------------------

console.log(word1);// "My"
console.log(word2);// "name"
// console.log(word4);// "Guy"
// console.log(word5);// "."
// console.log(word234);// [ 'name', 'is', 'Guy' ]


// -----------------------------------End Array---------------------------------------
// Object

// let person = { nickname: "Guy", firstName: "Burin", lastName: "Panchat" };
// let nickname = person.nickname;

// let { nickname, firstName, lastName } = person;
// -------------------------------------------------------------------------------
// let {nickname, firstName, lastName} = {nickname: "Guy", firstName : "Burin", lastName : "Panchat"};
// -------------------------------------------------------------------------------
// let nickname, firstName, lastName;
// {nickname, firstName, lastName} = person; // wrong statement to assignment 
// ({nickname, firstName, lastName} = person) // correct statement to assignment 
// -------------------------------------------------------------------------------
// let { nickname: NN, firstName: FN, lastName: LN } = person; // new Variable Name
// console.log(NN,FN,LN)
// -------------------------------------------------------------------------------
// let { nickname = "Guy", firstName = "Burin" } = person; // Default Values
// -------------------------------------------------------------------------------
// let objName = "nickname";
// let { [objName]: nickname } = { nickname: "Guy", firstName: "Burin", lastName: "Panchat" }; // Computed Property Name
// -------------------------------------------------------------------------------
// let person = { nickname: "Guy", fullname: ["Burin", "Panchat"] };

// let { nickname, fullname } = person; // Combining Arrays with Objects
// -------------------------------------------------------------------------------
// let person = { nickname: "Guy", fullnameArray: ["Burin", "Panchat"], fullnameObject: { firstName: "Burin", lastName: "Panchat" } };
// let { nickname, fullnameArray ,fullnameObject:{ firstName: FN, lastName: LN } } = person; // Nesting in Object Destructuring
// console.log(FN); //"Burin"
// -------------------------------------------------------------------------------
// let person = { nickname: "Guy", fullname: ["Burin", "Panchat"], firstName: "Burin", lastName: "Panchat" };
// let { nickname, fullname , ...others } = person;
// console.log(others); // { firstName: 'Burin', lastName: 'Panchat' }
// -------------------------------------------------------------------------------
// function person({ nickname: NN, firstName: FN } = {}) { //Object Destructuring and Functions
//     console.log(NN, FN);
// }

// person({ nickname: "Burin", lastName: "Panchat" });//"Burin"
// person();//undefined
// person(lastname);//Error : lastname is not defined
// -------------------------------------------------------------------------------
// console.log(nickname); //"Guy"
// console.log(firstName); //"Burin"
// console.log(lastName); //Panchat"
// console.log(fullname); // [ 'Burin', 'Panchat' ]