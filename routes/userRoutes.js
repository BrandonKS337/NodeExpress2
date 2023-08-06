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
});
//localhost:8000/api/users/:<user_id>
router.get("/:id", (req, res) => {
  Controllers.userController.getUsersById(req, res);
});

//localhost:8000/api/users/create
router.post("/create", (req, res) => {
  Controllers.userController.createUsers(req.body, res);
});

//localhost:8000/api/users/login
router.post("/login", (req, res) => {
  Controllers.userController.getUsersByEmail(req, res);
});

//don't worry about login in our app

//localhost:8000/api/users/:<user_id>
router.put("/:id", (req, res) => {
  Controllers.userController.updateUser(req, res);
});

//localhost:8000/api/users/:<user_id>
router.delete("/:id", (req, res) => {
  Controllers.userController.deleteUser(req, res);
});

module.exports = router;

module.exports = router;
