const Engineer = require("../lib/Engineer")

describe('Engineer', () => {
    it('should return engineer object with user input', () => {
        const engineer = new Engineer("Chelsea", 28, "chelseaburnham0@gmail.com", "Engineer", "chelseaburnham");

        expect(engineer).toEqual({name: "Chelsea", id: 28, email: "chelseaburnham0@gmail.com", role: "Engineer", github: "chelseaburnham"});
  });
})