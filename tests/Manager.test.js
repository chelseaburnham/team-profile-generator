const Manager = require("../lib/Manager")

describe('Manager', () => {
    it('should return manager object with user input', () => {
        const manager = new Manager("Chelsea", 28, "chelseaburnham0@gmail.com", "Manager", 2);

        expect(manager).toEqual({name: "Chelsea", id: 28, email: "chelseaburnham0@gmail.com", role: "Manager", officeNumber: 2});
  });
})