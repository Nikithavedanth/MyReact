interface Person{
    name:string;
    getName():string;

}
interface PersonDetail extends Person{
    age:number;
    gender:string;
}
interface Employee extends Person,PersonDetail{
    empCode:number;
}
let empObj=<Employee>{
    age:23,
    gender:"Female",
    name:"Nikitha",
    empCode:1234
};
// empObj.name="Nikitha";
// empObj.age=23;
// empObj.gender="Female";
// empObj.empCode=1234;
console.log(`EmpId:${empObj.empCode},Employee Name:${empObj.name}, Age:${empObj.age},Gender:${empObj.gender}`);