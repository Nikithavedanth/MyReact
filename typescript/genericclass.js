var StudentInfo = /** @class */ (function () {
    function StudentInfo(id, name) {
        this.id = id;
        this.Name = name;
    }
    StudentInfo.prototype.Display = function () {
        console.log("ID is ".concat(this.id, " and Name is : ").concat(this.Name));
    };
    return StudentInfo;
}());
var std1 = new StudentInfo(100, "Welcome");
std1.Display();
var std2 = new StudentInfo("102", "Isha");
std2.Display();
