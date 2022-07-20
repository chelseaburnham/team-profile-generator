const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, role, officeNumber) {
        super(name, id, email, role);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return "Manager";
    };
}

module.exports = Manager;

// do we need to do anything with officenumber?