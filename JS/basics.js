// var/let/const
// keyword variableName = value

// var name = 1234567
// console.log(name)

// VAR -->
// console.log(name) -- hoisting is possible
// var name = 1234
// var name = 765432 -- redeclaration is possible
// name = 923573498573 -- reinitialization is possible

// LET -->
// console.log(name) - hoisting under temporal dead zone (TDZ)
// Cannot access 'name' before initialization
// console.log(first)
// first is not defined
// let name = "Shrey"
// let name = "Rohit" -- redeclaration is not possible
// name = "Rohit" -- reinitialization is possible


// CONST -->
const name = "Shrey"
// const name = "Rohit" -- redeclaration is not possible
// name = "Rohit" -- reinitialization is not possible
// console.log(name) -- hoisting under TDZ
