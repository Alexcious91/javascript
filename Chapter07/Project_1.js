class Employee {
    constructor(firstName, lastName, yearsWorked) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.yearsWorked = yearsWorked;
    }
}

Employee.prototype.getDetails = function() {
    return (`Name: ${this.firstName} ${this.lastName} || Employment years: ${this.yearsWorked}`);
}

let employeesArray = [];

let firstEmployee = new Employee("John", "Doe", 8);
let secondEmployee = new Employee("Amanda", "Johnson", 2);

employeesArray.push(firstEmployee)
employeesArray.push(secondEmployee);

// Iterate through array
for (let i = 0; i < employeesArray.length; i++) {
    console.log(employeesArray[i].getDetails());
}






