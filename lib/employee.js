class Employee {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    getName() {
        console.log(`This person's name is ${this.name}`);
    }

    getId() {
        console.log(`This vehicle has ${this.numberOfWheels} wheels`);
    }

    getEmail() {
        console.log(`This vehicle has ${this.numberOfWheels} wheels`);
    }

    getRole() {
        console.log(`This vehicle has ${this.numberOfWheels} wheels`);
    }
}
module.exports = Employee;