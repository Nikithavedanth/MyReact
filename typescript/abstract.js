var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(id, name, salary) {
        this.empId = id;
        this.empName = name;
        this.empBasicSalary = salary;
    }
    Employee.prototype.Display = function () {
        console.log("EmpID:".concat(this.empId, ",EmpName:").concat(this.empName, " and Salary:").concat(this.empBasicSalary));
    };
    return Employee;
}());
var Trainer = /** @class */ (function (_super) {
    __extends(Trainer, _super);
    function Trainer(id, name, salary, sub) {
        var _this = _super.call(this, id, name, salary) || this;
        _this.subject = sub;
        return _this;
    }
    Trainer.prototype.CalSalary = function (hrs) {
        var salary;
        salary = this.empBasicSalary * hrs + (this.empBasicSalary * hrs) * 2.5 / 100.00;
        console.log("Trainer Salary is:" + salary);
    };
    Trainer.prototype.DisplayTrainerData = function () {
        _super.prototype.Display.call(this);
        console.log("Subject is:" + this.subject);
    };
    return Trainer;
}(Employee));
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // constructor(){
    //     super(102,"nikki",4000);
    // }
    Admin.prototype.CalSalary = function (hrs) {
        var salary;
        salary = this.empBasicSalary * hrs + (this.empBasicSalary * hrs) * 1.5 / 100.00;
        console.log("admin salary is:" + salary);
    };
    return Admin;
}(Employee));
var emp = new Trainer(101, "Nikitha", 12000, "Angular");
emp.CalSalary(4);
emp.DisplayTrainerData();
var admin = new Admin(102, "Isha", 8000);
admin.CalSalary(4);
admin.Display();
