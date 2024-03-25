var Result;
(function (Result) {
    Result[Result["Pass"] = 1] = "Pass";
    Result[Result["Fail"] = -1] = "Fail";
    Result[Result["Promoted"] = 0] = "Promoted";
})(Result || (Result = {}));
function Student() {
    var std = 101;
    var sName = "Nikitha";
    var isactive = true;
    var arMarks = [45, 67, 78];
    var total = 0; //Implicit typing
    for (var _i = 0, arMarks_1 = arMarks; _i < arMarks_1.length; _i++) {
        var item = arMarks_1[_i];
        total += item;
    }
    var avg = total / arMarks.length;
    var courses = ["c#.Net", "TypeScript", "Java", "Angular", "ReactJS"];
    for (var _a = 0, courses_1 = courses; _a < courses_1.length; _a++) { //of is for values or in is for index
        var item_1 = courses_1[_a];
        console.log(item_1);
    }
    var dateOfBirth = [22, "Jul", 1990];
    var stdResult;
    this.stdResult = function () {
        if (avg >= 35) {
            return Result.Pass;
        }
        else {
            return Result.Fail;
        }
    };
}
// Student();
var std = new Student();
console.log(std.stdResult());
console.log(Result[std.stdResult()]);
