//controller is to manage the routes and pull in the files properly

'use strict'

const bcrypt = require('bcrypt')

const Models = require('../models')

const getUsers = (res) => {
    Models.User.findAll({}) //looks for objects inside users
    .then((data) => {
        /*this is where you do NOT return passwords. We did this under the scope defined in user.js though so no worries.
        if not defined in scope remove password before returning user data either through js or scope attribute.
        JS method: 
        for(const user in data) {
            data[user].password = undefined*/
        res.send({result: 200, data: data})
    })
    .catch(err => {
        console.log("Error", err)
        throw err
    })
}

module.exports = {
    getUsers
}