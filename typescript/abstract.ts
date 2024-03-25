abstract class Employee{
    empId:number;
    empName:string;
    empBasicSalary:number;
    constructor(id:number,name:string,salary:number){
        this.empId=id;
        this.empName=name;
        this.empBasicSalary=salary;
    }
    Display(){
        console.log(`EmpID:${this.empId},EmpName:${this.empName} and Salary:${this.empBasicSalary}`)
    }
    abstract CalSalary(hrs:number);
}
class Trainer extends Employee{
    public subject:string;
    constructor(id:number,name:string,salary:number,sub:string){
        super(id,name,salary);
        this.subject=sub;
    }
    CalSalary(hrs: number) {
        let salary:number;
        salary=this.empBasicSalary*hrs+(this.empBasicSalary*hrs)*2.5/100.00;
        console.log("Trainer Salary is:"+salary);
    }
    DisplayTrainerData(): void {
        super.Display();
        console.log("Subject is:"+this.subject)
    }
}
class Admin extends Employee{
    // constructor(){
    //     super(102,"nikki",4000);
    // }
    CalSalary(hrs: number) {
        let salary:number;
        salary=this.empBasicSalary*hrs+(this.empBasicSalary*hrs)*1.5/100.00;
        //Employee.prototype.empBasicSalary
        console.log("admin salary is:"+salary);
    }
}
var emp:Trainer=new Trainer(101,"Nikitha",12000,"Angular");
emp.CalSalary(4);
emp.DisplayTrainerData();
let admin:Admin=new Admin(102,"Isha",8000);
admin.CalSalary(4);
admin.Display();