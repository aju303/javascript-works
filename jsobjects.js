// objects     just like dictionary


// the person becomes an object
var person={
    name:"sasuke",
    age:"22",
    height:"160"

}
console.log(person.name);
console.log(person.age);


// to check wheather a attribute exist or not   (in)

console.log("salary" in person);

// to add an attribute

person.salary=45000
console.log(person);

// add value to the existing attribute

person["salary"]+=5000
console.log(person);