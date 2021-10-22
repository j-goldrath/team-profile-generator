// Import the Employee parent class
const Employee = require('./employee');
// Create an `Manager` class that extends the `Employee` class
class Manager extends Employee {
  constructor(id, officeNumber) {
    super(id, name, email);
    this.officeNumber = officeNumber;
  }

  getRole() {
    console.log(`Role: ${this.constructor.name}`);
    return `${this.constructor.name}`;
  }
}