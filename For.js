// - For in , For of, For each

// For in  resault : 1 2 3 4
array = ["My", "name", "is", "Guy"]
for (const key in array) {
    console.log(array[key])
}

// For of resault : My name is Guy   ?Iterable Object   error object
for (const iterator of array) {
    console.log(iterator)
}

// For each resault : My name is Guy   
array.forEach(element => {
    console.log(element)
});