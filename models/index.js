//intent here is to if we have a bunch of models to pull them in here and allow other files to access this one. Just centralizes all models to one link
//aka import here and other files point to this one instead of 20 models links

'use strict'

const User = require('./user')

async function init() { //syncs user model with the db. If table doesn't exist it will create table
    await User.sync()
}

init()

module.exports = {
    User
}