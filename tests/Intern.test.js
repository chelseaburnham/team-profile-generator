const Intern = require("../lib/Intern")

describe('Intern', () => {
  it('should return intern object', () => {
      const intern = new Intern("Chelsea", 2, "chelseaburnham0@gmail.com", "Intern", "berkeley");
      expect(intern).toEqual({name: "Chelsea", id: 2, email: "chelseaburnham0@gmail.com", role: "Intern", school: "berkeley"});
});
})

describe('getName Method', () => {
  it('should return the name of the intern', () => {
    const intern = new Intern("Chelsea", 2, "chelseaburnham0@gmail.com", "Intern", "berkeley");
    expect(intern.getName()).toEqual("Chelsea")
});
})

describe('getId Method', () => {
  it('should return the id of the intern', () => {
    const intern = new Intern("Chelsea", 2, "chelseaburnham0@gmail.com", "Intern", "berkeley");
    expect(intern.getId()).toEqual(2)
});
})

describe('getEmail Method', () => {
  it('should return the email of the intern', () => {
    const intern = new Intern("Chelsea", 2, "chelseaburnham0@gmail.com", "Intern", "berkeley");
    expect(intern.getEmail()).toEqual("chelseaburnham0@gmail.com")
});
})

describe('getRole Method', () => {
  it('should return the role of the intern', () => {
    const intern = new Intern("Chelsea", 2, "chelseaburnham0@gmail.com", "Intern", "berkeley");
    expect(intern.getRole()).toEqual("Intern")
});
})

describe('getSchool Method', () => {
  it('should return the school name of the intern', () => {
    const intern = new Intern("Chelsea", 2, "chelseaburnham0@gmail.com", "Intern", "berkeley");
    expect(intern.getSchool()).toEqual("berkeley")
});
})