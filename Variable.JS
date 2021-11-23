// - Variable (let, var, const)

// -------var
for (var b = 0; b < 5; b++) {
    console.log(`in for ${b}`)
}
console.log(b)

// -------let
for (let a = 0; a < 5; a++) {
    console.log(`in for ${a}`)
}
// console.log(a)  // a is not defined


// -------const
const c = 1
c = 2
console.log(c)
