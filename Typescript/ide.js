var Pycharm = /** @class */ (function () {
    function Pycharm() {
    }
    Pycharm.prototype.run = function () {
        console.log("have to run the program");
    };
    Pycharm.prototype.debug = function () {
        console.log("ability to debus a given program");
    };
    return Pycharm;
}());
var py = new Pycharm();
py.run();
py.debug();
