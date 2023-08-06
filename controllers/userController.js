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

const getUsersById = (req, res) => {
    Models.User.findAll({ where: { id: req.params.id } })
      .then((data) => {
        //Do NOT return passwords
        res.send({ result: 200, data: data });
      })
      .catch((err) => {
        console.log("Error:", err);
        throw err;
      });
  };
  
  // Should not use this to create users from front end, instead use the auth route/controller
  // Leaving this here for your reference
  const createUsers = async (data, res) => {
    // Bcrypt documentation: https://www.npmjs.com/package/bcrypt
    // Generate a salt, define the rounds
    const rounds = 10; //any more than 10 will take exponentially more CPU power
    const salt = await bcrypt.genSaltSync(rounds);
    const originalPassword = data.password;
    const hashedPassword = bcrypt.hashSync(originalPassword, salt);
    data.password = hashedPassword;
  
    Models.User.create(data)
      .then((data) => {
        data.password = undefined; //Remove the password property
        res.send({ result: 201, data: data });
      })
      .catch((err) => {
        console.log("Error:", err);
        throw err;
      });
  };
  
  const updateUser = (req, res) => {
    Models.User.update(req.body, { where: { id: req.params.id } })
      .then((data) => {
        res.send({ result: 201, data: data });
      })
      .catch((err) => {
        console.log("Error:", err);
        throw err;
      });
  };
  
  const deleteUser = (req, res) => {
    Models.User.destroy({ where: { id: req.params.id } })
      .then((data) => {
        res.send({ result: 201, data: data });
      })
      .catch((err) => {
        console.log("Error:", err);
        throw err;
      });
  };
  
  module.exports = {
    getUsers,
    getUsersById,
    createUsers,
    updateUser,
    deleteUser,
  };