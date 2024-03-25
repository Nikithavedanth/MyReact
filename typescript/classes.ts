class Student{
     sId:number=101;
     sName:string="Nikitha";
     isActive:boolean=true;
     total:number=0;
     avg:number= 0;
     arMarks:Array<number>=[35,56,78];
     arCourses:string[]=["typescript","javascript","angular","reactjs"];
     DisplayStudentDetails(){
        let studentDetails:string=`StudentId:${this.sId}\nStudentName:${this.sName}\nIsActive:${this.isActive}`;
        console.log(studentDetails);
     }
     DisplayResult(){
        for(var item of this.arMarks){
            this.total=this.total+item;
        }
        console.log("Total is:"+this.total);
        console.log("Average is:"+this.total/this.arMarks.length);
     }

}
var std:Student=new Student();
std.DisplayStudentDetails();
std.DisplayResult();