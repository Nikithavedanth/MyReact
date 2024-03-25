class Employee{
    empId:number;
    empName:string;
    basicSalary:number;
    constructor(id:number,name:string,salary:number){
        this.empId=id;
        this.empName=name;
        this.basicSalary=salary;
    }
    Display(){
        console.log(`EMpId is:${this.empId},EmpName is:${this.empName} and Salary is:${this.basicSalary}`);
    }
}
 class Trainer extends Employee{
    public subject:string;
    constructor(sub:string,id:number,name:string,salary:number){
        super(id,name,salary);
        this.subject=sub;

    }
    Display(){
        super.Display();
        console.log(`Subject is:${this.subject}`)
    }
 }
 var obj:Trainer=new Trainer("angular",101,"Nikitha",12000);
 obj.Display();