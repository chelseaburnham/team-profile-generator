const Intern = require("../lib/Intern")

describe('Intern', () => {
    it('should return intern object with user input', () => {
        const intern = new Intern("Chelsea", 28, "chelseaburnham0@gmail.com", "Intern", "Berkeley");

        expect(intern).toEqual({name: "Chelsea", id: 28, email: "chelseaburnham0@gmail.com", role: "Intern", school: "Berkeley"});
  });
})