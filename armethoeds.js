var arr =[3,6,7,5,8,2,10,100,101  ]


var squ= arr.map(num=> num**2)
// console.log(squ);


// filter    uses when theres a condition 

var even=arr.filter(num=> num%2==0)
// console.log(even);


// sort     to sort an array

// arr.sort((o1,o2)=> o1<o2? -1:1)
arr.sort((o1,o2)=> o1-o2)  
//  this means return 01 first then 02
// console.log(arr);


// reduce     used to find a certain end product  eg sum,max,min,


// var sum=arr.reduce((n1,n2)=>n1+n2)
// console.log(sum);

// var max=arr.reduce((n1,n2)=>n1>n2?n1:n2)
// console.log(max);

// var min=arr.reduce((n1,n2)=>n1<n2?n1:n2)
// console.log(min);


// foreach   same as for loop

// arr.forEach(n=>console.log(n))

// arr.filter(n=>n%2==0).map(n=>n**2).forEach(n=>console.log(n))

arr.filter(n=>n>10).map(n=>n**2).forEach(n=>console.log(n))


