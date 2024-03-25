//function
function Test(){
    var marks:number=33;
    var result:string="pass";//let
    if(marks<35){
        var result:string="fail";//let
        console.log("inner if condition result:"+result);
    }
    console.log("outer if condition result:"+result);
}
//calling function
Test();

//function which is used to perform action
//we have to explicitly execute the function by calling them