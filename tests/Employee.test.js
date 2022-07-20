const Employee = require("../lib/Employee")
 
describe('Employee', () => {
    it('should return employee object with user input', () => {
        const employee = new Employee("Chelsea", 28, "chelseaburnham0@gmail.com", "Employee");

        expect(employee).toEqual({name: "Chelsea", age: 28, email: "chelseaburnham0@gmail.com", role: "Employee"});
    });
  
    it('', () => {
      
    });
  
    it('', () => {
      
    });
  
    it('', () => {
      
    });
  });