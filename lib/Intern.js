class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getSchool()
}

module.exports = Intern;

// what does it mean by saying getrole() is overridden to return "Intern"?