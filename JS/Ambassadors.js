const Employee = require('./Employee')

class Ambassadors extends Employee {
    constructor (name, email, id, title) {
        super(name, email, id)
        this.name = name;
        this.email = email;
        this.id = id;
        this.title = "Ambassador"; 
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

    getTitel(){
        return this.title
    }
}

module.exports = Ambassador