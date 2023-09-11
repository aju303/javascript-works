// in js everything is object

// in python we had tuple , list , set , dictionary 
// here
// arrays []    same as list

var expenses=[23000,25000,13000,24000]

// for (let exp of expenses){
//     console.log(exp);
// }


// for (let exp of expenses){
//     if(exp>22000){
//         console.log(exp);
//     }
// }




//  push()         to add an object to the array
expenses.push(30000)
// console.log(expenses);

//  pop()          to remove the last object in an array
expenses.pop()
// console.log(expenses);

// includes(object)      to check wheater a object is in the array

// console.log(expenses.includes(35000));


// map()       to include a change in all elements

// var newexp=expenses.map(exp=> exp+5000)    adding 5000 to all 

// console.log(newexp);

var newexp=expenses.map(exp=>exp-2000)
// console.log(newexp);

// filter     use when theres a condition

var expFilter=expenses.filter(exp=>exp>20000)
// console.log(expFilter);




