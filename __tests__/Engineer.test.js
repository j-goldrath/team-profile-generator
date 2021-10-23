const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  describe("getGithub", () => {
    it("it should return the github username of the engineer", () => {
        const engineer = new Engineer("Mike", 1, "mike@testemail.com", "mikey88");

        expect(engineer.getGithub()).toBe('mikey88');
    });
  });

  describe("getRole", () => {
    it("should return role of Engineer", () => {
        const engineer = new Engineer("Mike", 1, "mike@testemail.com", "mikey88");

        expect(engineer.getRole()).toBe('Engineer');
    });
  });
}); 