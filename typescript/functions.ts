enum Result{
    Pass=1,
    Fail=-1,
    Promoted=0
}
function Student(){
    let std:number=101;
    let sName:string="Nikitha";
    let isactive:boolean=true;
    let arMarks:Array<number>=[45,67,78];
    let total = 0;//Implicit typing
    for(var item of arMarks){
        total +=item;
    }
    let avg=total/arMarks.length;
    let courses:string[]=["c#.Net","TypeScript","Java","Angular","ReactJS"];
    for(let item of courses){//of is for values or in is for index
        console.log(item);
    }
    let dateOfBirth:[number,string,number]=[22,"Jul",1990];
    let stdResult:Result;
    this.stdResult=function(){
        if(avg>=35){
            return Result.Pass;
        }
        else{
            return Result.Fail;
        }
    }
}
// Student();
var std =new Student();
console.log(std.stdResult());
console.log(Result[std.stdResult()]);