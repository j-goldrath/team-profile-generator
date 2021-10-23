const Manager = require("../lib/manager");

describe("Manager", () => {
  describe("getOfficeNumber", () => {
    it("it should return the office number of the manager", () => {
        const manager = new Manager("Mike", 1, "mike@testemail.com", "101");

        expect(manager.getOfficeNumber()).toBe("101");
    });
  });

  describe("getRole", () => {
    it("should return role of Manager", () => {
        const manager = new Manager("Mike", 1, "mike@testemail.com", "101");

        expect(manager.getRole()).toBe('Manager');
    });
  });
});