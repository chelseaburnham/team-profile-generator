const Employee = require("../lib/Employee")
 
describe('Employee', () => {
    it('should return employee object with user input', () => {
        const employee = new Employee("Chelsea", 28, "chelseaburnham0@gmail.com", "Employee");

        expect(employee).toEqual({name: "Chelsea", age: 28, email: "chelseaburnham0@gmail.com", role: "Employee"});
  });
})

describe('getName Method', () => {
    it('should return the name of the user', () => {

        expect(this.name).toEqual("Chelsea")
  });
})

describe('getId Method', () => {
    it('should return the id of the user', () => {

        expect(this.id).toEqual(28)
  });
})

describe('getEmail Method', () => {
    it('should return the email of the user', () => {

        expect(this.email).toEqual("chelseaburnham0@gmail.com")
  });
})

describe('getName Method', () => {
    it('should return the role of the user', () => {

        expect(this.role).toEqual("Employee")
  });
})