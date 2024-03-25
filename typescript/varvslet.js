function Test() {
    var marks = 33;
    var result = "pass";
    if (marks < 35) {
        var result = "fail";
        console.log("inner if condition result:" + result);
    }
    console.log("outer if condition result:" + result);
}
Test();
