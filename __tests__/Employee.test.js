const Employee = require("../lib/employee");

describe("Employee", () => {
    describe("getName", () => {
        it("should return the employee's name", () => {
            const employee = new Employee("Mike", 1, "mike@testemail.com");

            expect(employee.getName()).toEqual("Mike");
        });
    });

    describe("getId", () => {
        it("should return the employee's ID number", () => {
            const employee = new Employee("Mike", 1, "mike@testemail.com");

            expect(employee.getId()).toEqual(1);
        });
    });

    describe("getEmail", () => {
        it("should return the employee's email address", () => {
            const employee = new Employee("Mike", 1, "mike@testemail.com");

            expect(employee.getEmail()).toEqual("mike@testemail.com");
        });
    });

    describe("getRole", () => {
        it("should return a role of Employee", () => {
            const employee = new Employee("Mike", 1, "mike@testemail.com");

            expect(employee.getRole()).toEqual('Employee');
        });
    });
});
