var Person = /** @class */ (function () {
    function Person(fname, lname, age) {
        this.firstName = fname;
        this.lastName = lname;
        this.age = age;
    }
    Person.prototype.Greet = function (name) {
        console.log("welcome:" + name);
    };
    Person.prototype.FullName = function () {
        return this.firstName + "" + this.lastName;
    };
    Person.prototype.GetAge = function () {
        return this.age;
    };
    return Person;
}());
var obj = new Person("Nikitha", "Madabhushi", 23);
console.log("Name " + obj.FullName());
console.log("Age " + obj.GetAge());
obj.Greet("Nikitha");
