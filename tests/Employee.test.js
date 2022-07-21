const Employee = require("../lib/Employee")
 
describe('Employee', () => {
    it('should return employee object', () => {
        const employee = new Employee("Chelsea", 2, "chelseaburnham0@gmail.com");
        expect(employee).toEqual({name: "Chelsea", id: 2, email: "chelseaburnham0@gmail.com"});
  });
})

describe('getName Method', () => {
    it('should return the name of the employee', () => {
      const employee = new Employee("Chelsea", 2, "chelseaburnham0@gmail.com");
      expect(employee.getName()).toEqual("Chelsea")
  });
})

describe('getId Method', () => {
    it('should return the id of the employee', () => {
      const employee = new Employee("Chelsea", 2, "chelseaburnham0@gmail.com");
      expect(employee.getId()).toEqual(2)
  });
})

describe('getEmail Method', () => {
    it('should return the email of the employee', () => {
      const employee = new Employee("Chelsea", 2, "chelseaburnham0@gmail.com");
      expect(employee.getEmail()).toEqual("chelseaburnham0@gmail.com")
  });
})

describe('getRole Method', () => {
    it('should return the role of the user', () => {
      const employee = new Employee("Chelsea", 2, "chelseaburnham0@gmail.com");
      expect(employee.getRole()).toEqual("Employee")
  });
})