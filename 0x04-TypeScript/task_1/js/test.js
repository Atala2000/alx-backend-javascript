var testDetails;
testDetails = function (_a) {
    var name = _a.name, age = _a.age;
    return "My name is ".concat(name, " and age is ").concat(age);
};
var testobj = {
    name: 'Micheal',
    age: 56,
};

class Test {
    name = "Kiddie";
    age = 45;

    constructor(name, age) {
        this.name = name;
    }
}

console.log(testDetails(testobj));
