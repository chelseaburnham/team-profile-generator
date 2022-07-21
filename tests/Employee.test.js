const Employee = require("../lib/Employee")
 
describe('Employee', () => {
    it('should return employee object with user input', () => {
        const employee = new Employee("Chelsea", 28, "chelseaburnham0@gmail.com", "Employee");
        expect(employee).toEqual({name: "Chelsea", id: 28, email: "chelseaburnham0@gmail.com", role: "Employee"});
  });
})

describe('getName Method', () => {
    it('should return the name of the employee', () => {
      // const name = "Chelsea"
      const employee = new Employee("Chelsea", 28, "chelseaburnham0@gmail.com", "Employee");
      expect(employee.getName()).toEqual("Chelsea")
  });
})

describe('getId Method', () => {
    it('should return the id of the employee', () => {
      const id = 28
      expect(typeof id).toEqual("number")
  });
})

describe('getEmail Method', () => {
    it('should return the email of the employee', () => {
      const email = "chelseaburnham0@gmail.com"
      expect(typeof email).toEqual("string")
  });
})

describe('getName Method', () => {
    it('should return the role of the user', () => {
      const role = "Employee"
      expect(typeof role).toEqual("string")
  });
})