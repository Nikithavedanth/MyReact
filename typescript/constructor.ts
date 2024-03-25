class Employee{
    empId:number;
    empName:string;
    empSalary?:number;
    empAccountBal?:number;

    // constructor(){
    //     this.empId=101;
    //     this.empName="Nikitha";
    //     this.empSalary=12345;
    // }//salary:number=5000 without a ?
    constructor(id:number,name:string,salary?:number,balance?:number){
        this.empId=id;
        this.empName=name;
        this.empSalary=salary;
        this.empAccountBal=balance;
    }
    Display(){
        console.log(` EmpId:${this.empId}\n EmpName:${this.empName}\n EmpSalary:${this.empSalary}\n AccountBalance:${this.empAccountBal}`);
    }
}
var emp:Employee=new Employee(102,"akshita",12000, 30300);
emp.Display();
var emp1:Employee=new Employee(103,"Isha",13000,494994);
emp1.Display();
var emp2:Employee=new Employee(104,"Megha");
emp2.Display();
var emp2:Employee=new Employee(105,"amrutha",1030300);
emp2.Display();