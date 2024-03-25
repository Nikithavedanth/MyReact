interface IPerson{
    firstName:string;
    lastName:string;
    age:number;
    FullName();
    GetAge();
}
class Person implements IPerson{
    firstName: string;
    lastName: string;
    age: number;
    Greet(name:string){
        console.log("welcome:"+name);
    }
    FullName():string {
        return this.firstName+""+this.lastName;
    }
    GetAge():number {
        return this.age;
    }
    constructor(fname:string, lname:string,age:number){
        this.firstName=fname;
        this.lastName=lname;
        this.age=age;
    }

}
var obj:Person=new Person("Nikitha","Madabhushi",23);
console.log("Name "+obj.FullName());
console.log("Age "+obj.GetAge());
obj.Greet("Nikitha");