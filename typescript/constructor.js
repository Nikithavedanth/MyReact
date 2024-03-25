var Employee = /** @class */ (function () {
    // constructor(){
    //     this.empId=101;
    //     this.empName="Nikitha";
    //     this.empSalary=12345;
    // }
    function Employee(id, name, salary, balance) {
        this.empId = id;
        this.empName = name;
        this.empSalary = salary;
        this.empAccountBal = balance;
    }
    Employee.prototype.Display = function () {
        console.log(" EmpId:".concat(this.empId, "\n EmpName:").concat(this.empName, "\n EmpSalary:").concat(this.empSalary, "\n AccountBalance:").concat(this.empAccountBal));
    };
    return Employee;
}());
var emp = new Employee(102, "akshita", 12000, 30300);
emp.Display();
var emp1 = new Employee(103, "Isha", 13000, 494994);
emp1.Display();
var emp2 = new Employee(104, "Megha", 10000, 494949);
emp2.Display();
var emp2 = new Employee(105, "amrutha", 1030300);
emp2.Display();
