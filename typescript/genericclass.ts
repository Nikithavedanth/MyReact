class StudentInfo<T,S>{
    private id:T;
    private Name:S;
    constructor(id:T,name:S){
        this.id=id;
        this.Name = name;
    }
    Display():void{
        console.log(`ID is ${this.id} and Name is : ${this.Name}`);
    }
}
let std1:StudentInfo<number,string>=new StudentInfo(100,"Welcome");
std1.Display();
let std2:StudentInfo<string,string> = new StudentInfo("102","Isha");
std2.Display();