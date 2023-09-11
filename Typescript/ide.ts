interface ide{
    run()
    debug()
}

class Pycharm implements ide{
    run() {

        console.log("have to run the program");
        
    }
    debug() {

        console.log("ability to debug a given program");
        
    }


}

var py = new Pycharm()
py.run()
py.debug()