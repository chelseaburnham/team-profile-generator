const Manager = require("../lib/Manager")

describe('Manager', () => {
  it('should return manager object', () => {
      const manager = new Manager("Chelsea", 2, "chelseaburnham0@gmail.com", "Manager", 25);
      expect(manager).toEqual({name: "Chelsea", id: 2, email: "chelseaburnham0@gmail.com", role: "Manager", officeNumber: 25});
});
})

describe('getName Method', () => {
  it('should return the name of the manager', () => {
    const manager = new Manager("Chelsea", 2, "chelseaburnham0@gmail.com", "Manager", 25);
    expect(manager.getName()).toEqual("Chelsea")
});
})

describe('getId Method', () => {
  it('should return the id of the manager', () => {
    const manager = new Manager("Chelsea", 2, "chelseaburnham0@gmail.com", "Manager", 25);
    expect(manager.getId()).toEqual(2)
});
})

describe('getEmail Method', () => {
  it('should return the email of the manager', () => {
    const manager = new Manager("Chelsea", 2, "chelseaburnham0@gmail.com", "Manager", 25);
    expect(manager.getEmail()).toEqual("chelseaburnham0@gmail.com")
});
})

describe('getRole Method', () => {
  it('should return the role of the manager', () => {
    const manager = new Manager("Chelsea", 2, "chelseaburnham0@gmail.com", "Manager", 25);
    expect(manager.getRole()).toEqual("Manager")
});
})

describe('getOfficeNumber Method', () => {
  it('should return the github account of the manager', () => {
    const manager = new Manager("Chelsea", 2, "chelseaburnham0@gmail.com", "Manager", 25);
    expect(manager.getOfficeNumber()).toEqual(25)
});
})