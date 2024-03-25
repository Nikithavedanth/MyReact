var Student = /** @class */ (function () {
    function Student() {
        this.sId = 101;
        this.sName = "Nikitha";
        this.isActive = true;
        this.total = 0;
        this.avg = 0;
        this.arMarks = [35, 56, 78];
        this.arCourses = ["typescript", "javascript", "angular", "reactjs"];
    }
    Student.prototype.DisplayStudentDetails = function () {
        var studentDetails = "StudentId:".concat(this.sId, "\nStudentName:").concat(this.sName, "\nIsActive:").concat(this.isActive);
        console.log(studentDetails);
    };
    Student.prototype.DisplayResult = function () {
        for (var _i = 0, _a = this.arMarks; _i < _a.length; _i++) {
            var item = _a[_i];
            this.total = this.total + item;
        }
        console.log("Total is:" + this.total);
        console.log("Average is:" + this.total / this.arMarks.length);
    };
    return Student;
}());
var std = new Student();
std.DisplayStudentDetails();
std.DisplayResult();
