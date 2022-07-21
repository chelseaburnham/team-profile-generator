const Manager = require("../lib/Manager")

describe('Manager', () => {
  it('should return manager object', () => {
      const manager = new Manager("Chelsea", 2, "chelseaburnham0@gmail.com", 25, "Manager");
      expect(manager).toEqual({name: "Chelsea", id: 2, email: "chelseaburnham0@gmail.com", office: 25, role: "Manager"});
});
})

describe('getName Method', () => {
  it('should return the name of the manager', () => {
    const manager = new Manager("Chelsea", 2, "chelseaburnham0@gmail.com", 25, "Manager");
    expect(manager.getName()).toEqual("Chelsea")
});
})

describe('getId Method', () => {
  it('should return the id of the manager', () => {
    const manager = new Manager("Chelsea", 2, "chelseaburnham0@gmail.com", 25, "Manager");
    expect(manager.getId()).toEqual(2)
});
})

describe('getEmail Method', () => {
  it('should return the email of the manager', () => {
    const manager = new Manager("Chelsea", 2, "chelseaburnham0@gmail.com", 25, "Manager");
    expect(manager.getEmail()).toEqual("chelseaburnham0@gmail.com")
});
})

describe('getRole Method', () => {
  it('should return the role of the manager', () => {
    const manager = new Manager("Chelsea", 2, "chelseaburnham0@gmail.com", 25, "Manager");
    expect(manager.getRole()).toEqual("Manager")
});
})

describe('getOffice Method', () => {
  it('should return the github account of the manager', () => {
    const manager = new Manager("Chelsea", 2, "chelseaburnham0@gmail.com", 25, "Manager");
    expect(manager.getOffice()).toEqual(25)
});
})