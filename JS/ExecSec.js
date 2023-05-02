const Employee = require('./Employee')

class ExecSec extends Employee {
    constructor (name, email, id, title) {
        super(name, email, id)
        this.name = name;
        this.email = email;
        this.id = id;
        this.title = "Executive Secretary"; 
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

module.exports = ExecSec