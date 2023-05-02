const Chief = require('./Employee')

class Chief extends Employee {
    constructor (name, email, id, title) {
        super(name, email, id)
        this.name = name;
        this.email = email;
        this.id = id;
        this.role = "CEO"; 
    }

    getName(){
        return this.name
    }

    getEmail() {
        return this.email
    }

    getId() {
        return this.id
    }

    getRole(){
        return this.role
    }
}

module.exports = Chief
