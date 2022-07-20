const Manager = require("../lib/Manager")

describe('Manager', () => {
    it('should return manager object with user input', () => {
        const manager = new Manager("Chelsea", 28, "chelseaburnham0@gmail.com", "Manager", 2);

        expect(manager).toEqual({name: "Chelsea", id: 28, email: "chelseaburnham0@gmail.com", role: "Manager", officeNumber: 2});
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
      const role = "Manager"
      expect(typeof role).toEqual("string")
  });
})

describe('getOfficeNumber Method', () => {
    it('should return the office number of the user', () => {
      const officeNumber = 2
      expect(typeof officeNumber).toEqual("number")
  });
})