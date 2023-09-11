// interface
// syntax:
// interface interfaceName{

// }

interface car{
    steering()
    brake()
    tyre()
}

var polo:car={

    steering() {
        console.log("car needs to have a string");
        
    },
    brake() {
        console.log("must have a quick brake");
        
    },
    tyre() {
        console.log("must have good tires");
        
    },
    
}


interface onInit{
    ngOnInit()
    
}

var component:onInit={
    ngOnInit() {
        console.log("initialization");    
    },

}