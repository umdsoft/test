const Users = require('../public/Users')

class Filter{
    constructor(age) {
        this.age = age
    }
    filter(){
        const users =  Users.filter(item => item.age === this.age)
        return new Object({
            num: users.length,
            users
        })
    }
}

module.exports = Filter;
