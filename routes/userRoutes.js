//setting up the routes to be used for trafficking new data

const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

//route sudo notes here for each route to help with testing or writing.

//localhost: 8000/api/users <<-- base route

//localhost: 8000/api/users/
router.get("/", (req, res) => {
  Controllers.userController.getUsers(res);
  /*
    1: looks inside our controllers folder because of line 7
    2: looks inside our useController.js
    3: references the getUsers function in useController.js and pulls in the response data
    */
})

module.exports = router;
