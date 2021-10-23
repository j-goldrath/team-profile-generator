// Import the Employee parent class
const Employee = require('./employee');
// Create an `Manager` class that extends the `Employee` class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        console.log(`Office Number: ${this.officeNumber}`);
        return this.officeNumber;
    }

    getRole() {
        console.log(`Role: ${this.constructor.name}`);
        return this.constructor.name;
    }
}
module.exports = Manager;