class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github
    }
    getGithub()
}

module.exports = Engineer;

// what does it mean by saying getrole() is overridden to return "Engineer"?