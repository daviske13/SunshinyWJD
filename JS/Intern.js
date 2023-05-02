const Employee = require('./Employee')

class Intern extends Employee {
    constructor (name, email, id, title, school) {
        super(name, email, id)
        this.name = name;
        this.school = school;
        this.email = email;
        this.id = id;
        this.title = "Intern"; 
    }

    getName() {
        return this.name
    }

    getSchool(){
        return this.school
    }

    getEmail() {
        return this.email
    }

    getId() {
        return this.id
    }

    getTitle(){
        return this.title
    }
}

module.exports = Intern