const Intern = require("../lib/intern");

describe("Intern", () => {
  describe("getSchool", () => {
    it("it should return the school attended by intern", () => {
        const intern = new Intern("Mike", 1, "mike@testemail.com", "Harvard");

        expect(intern.getSchool()).toEqual('Harvard');
    });
  });

  describe("getRole", () => {
    it("should return role of Intern", () => {
        const intern = new Intern("Mike", 1, "mike@testemail.com", "Harvard");

        expect(intern.getRole()).toEqual('Intern');
    });
  });
});