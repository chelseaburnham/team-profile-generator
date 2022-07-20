const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
}

module.exports = Manager;

// what does it mean by saying getrole() is overridden to return "Manager"?