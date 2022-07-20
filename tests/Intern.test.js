const Intern = require("../lib/Intern")

describe('Intern', () => {
    it('should return intern object with user input', () => {
        const intern = new Intern("Chelsea", 28, "chelseaburnham0@gmail.com", "Intern", "Berkeley");

        expect(intern).toEqual({name: "Chelsea", id: 28, email: "chelseaburnham0@gmail.com", role: "Intern", school: "Berkeley"});
  });
})

describe('getName Method', () => {
    it('should return the name of the user', () => {
      const name = "Chelsea"
      expect(typeof name).toEqual("string")
  });
})

describe('getId Method', () => {
    it('should return the id of the user', () => {
      const id = 28
      expect(typeof id).toEqual("number")
  });
})

describe('getEmail Method', () => {
    it('should return the email of the user', () => {
      const email = "chelseaburnham0@gmail.com"
      expect(typeof email).toEqual("string")
  });
})

describe('getName Method', () => {
    it('should return the role of the user', () => {
      const role = "Intern"
      expect(typeof role).toEqual("string")
  });
})

describe('getSchool Method', () => {
    it('should return the school of the user', () => {
      const school = "Berkeley"
      expect(typeof school).toEqual("string")
  });
})