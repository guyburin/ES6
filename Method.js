// - map, reduces, filter

// map return array
array = ["My", "name", "is", "Guy"]
const result1 = array.map((word) => {
    console.log(word) //My name is Guy
}) 

//filter 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const result2 = numbers.filter((num) => {
    return num > 5
})
console.log(result2) //[ 6, 7, 8, 9, 10 ]

//reduces
array = ["My", "name", "is", "Guy"]
const result3 = array.reduce((fullword,word) => {
    return fullword+" "+word
})

console.log(result3) //My name is Guy