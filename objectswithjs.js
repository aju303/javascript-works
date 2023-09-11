var frameWorks=[
    {id:1,name:"django",language:"python",side:"server","rating":5},
    {id:2,name:"fastapi",language:"python",side:"server","rating":4},
    {id:3,name:"angular",language:"js",side:"client","rating":4},
    {id:4,name:"react",language:"js",side:"client","rating":4},
    {id:5,name:"spring",language:"java",side:"server","rating":4},
    {id:6,name:"asp.net",language:"c#",side:"server","rating":3},

]

// to find total no of frameworks eg total no of objects in an array

console.log(frameWorks.length);

// print all framewrok name

// frameWorks.map(fw=>fw.name).forEach(n=>console.log(n))

// frameWorks.forEach(fw=>console.log(fw.name))

// only python language names

// frameWorks.filter(fw=>fw.language == "python").forEach(fw=>console.log(fw.name))

// server side frameworks name

// frameWorks.filter(fw=>fw.side == "server").forEach(fw=>console.log(fw.name))

// highest rating name

var popularFw=frameWorks.reduce((fw1,fw2)=>fw1.rating > fw2.rating ? fw1 : fw2)
// console.log(popularFw);


// some()  retruns boolean value

var isPresent=frameWorks.some(fw=>fw.language == "php")
console.log(isPresent);