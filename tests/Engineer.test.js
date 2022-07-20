const Engineer = require("../lib/Engineer")

describe('Engineer', () => {
    it('should return engineer object with user input', () => {
        const engineer = new Engineer("Chelsea", 28, "chelseaburnham0@gmail.com", "Engineer", "chelseaburnham");

        expect(engineer).toEqual({name: "Chelsea", id: 28, email: "chelseaburnham0@gmail.com", role: "Engineer", github: "chelseaburnham"});
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
      const role = "Engineer"
      expect(typeof role).toEqual("string")
  });
})

describe('getGithub Method', () => {
    it('should return the github account of the user', () => {
      const github = "chelseaburnham"
      expect(typeof github).toEqual("string")
  });
})