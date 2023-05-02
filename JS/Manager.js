const Employee = require('./Employee')

class Manager extends Employee {
    constructor (name, email, id, title) {
        super(name, email, id)
        this.name = name;
        this.email = email;
        this.id = id;
        this.title = "Manager"; 
    }

    getName() {
        return this.name
    }

    getEmail(){
        return this.email
    }

    getId() {
        return this.id
    }

    getTitle(){
        return this.title
    }
}

module.exports = Manager