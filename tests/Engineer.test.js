const Engineer = require("../lib/Engineer")

describe('Engineer', () => {
    it('should return engineer object', () => {
        const engineer = new Engineer("Chelsea", 2, "chelseaburnham0@gmail.com", "chelseaburnham");
        expect(engineer).toEqual({name: "Chelsea", id: 2, email: "chelseaburnham0@gmail.com", github: "chelseaburnham"});
  });
})

describe('getName Method', () => {
    it('should return the name of the engineer', () => {
      const engineer = new Engineer("Chelsea", 2, "chelseaburnham0@gmail.com", "chelseaburnham");
      expect(engineer.getName()).toEqual("Chelsea")
  });
})

describe('getId Method', () => {
    it('should return the id of the engineer', () => {
      const engineer = new Engineer("Chelsea", 2, "chelseaburnham0@gmail.com", "chelseaburnham");
      expect(engineer.getId()).toEqual(2)
  });
})

describe('getEmail Method', () => {
    it('should return the email of the engineer', () => {
      const engineer = new Engineer("Chelsea", 2, "chelseaburnham0@gmail.com", "chelseaburnham");
      expect(engineer.getEmail()).toEqual("chelseaburnham0@gmail.com")
  });
})

describe('getRole Method', () => {
    it('should return the role of the engineer', () => {
      const engineer = new Engineer("Chelsea", 2, "chelseaburnham0@gmail.com", "chelseaburnham");
      expect(engineer.getRole()).toEqual("Engineer")
  });
})

describe('getGithub Method', () => {
    it('should return the github account of the engineer', () => {
      const engineer = new Engineer("Chelsea", 2, "chelseaburnham0@gmail.com", "chelseaburnham");
      expect(engineer.getGithub()).toEqual("chelseaburnham")
  });
})