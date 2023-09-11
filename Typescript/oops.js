// class Student{
//     ename:string;
//     class:string;
//     rollno:number;
//     setStudent(name,eclass,rollno){
//         this.ename=name;
//         this.class=eclass;
//         this.rollno=rollno
//     }
//     printStudent(){
//         console.log(this.ename,this.class,this.rollno);
//     }
// }
// var stu = new Student()
// stu.setStudent("ash","sixth","17")
// stu.printStudent()
// using constructor 
// instance variables
var Student = /** @class */ (function () {
    function Student(name, eclass, rollno) {
        this.ename = name;
        this["class"] = eclass;
        this.rollno = rollno;
    }
    Student.prototype.printStudent = function () {
        console.log(this.ename, this["class"], this.rollno);
    };
    return Student;
}());
var stu = new Student("ash", "sixth", "17");
stu.printStudent();
