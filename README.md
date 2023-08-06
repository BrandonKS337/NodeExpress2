# NodeExpress2

this is the read me file for this folder. goal of this repo is to rework the node to db exercise Robert went through with us in class to review what we need to know start to finish GREAT recap very smooth process

PRE-STEP 1:

- establish a repo and clone into desired file.
- during repo creation select add readme to create this notation file (note needed but best practice)
- select a .gitignore type. (we chose node for this exercise due to using node.js for our express app. If node_modules isn't ignored on clone git init may fix if not
  delete the node_module folders and npm i or npm i express @latest to install to reinstall express)
- DANGER: if you need to remove node_modules folder using terminal type "rm -rf node_modules" to full remove file from system

step 1:
set up package.json with dependencies and scripts. Establish the needed installs for your node server

step 2:
work on your server.js file

- extract express from package and name the give it the name app. (first 2 lines of server.js)
- import dotenv and add config() this will all project root directory to load environment variables in .env into our node.js environment. such as
  DB_USER and DB_PASSWORD to access the db server
- app.use(express.json()) will auto parse json data for us
- app.get to create a test route to verify server works ('/" req,res ...... hello world )
- define port || 8000 is current for example
- establish listener to watch for http traffic on defined port (console.log message showing server running)
- fire up server: npm run server (established in scripts of package.json)

step 3. dbConnect file

- use strict
- pull out sequelize form package
- define the environment variables sequelize needs to pull from .env. establish "dialect" aka what db type. Example uses mysql
- create connection func that will console log success/Failure. add in process.exit(1) to stop it from looping through and retrying endlessly
- call func
  export sequelize and func to allow access in modules or elsewhere

step 4. tie dbconnect into server.js

- set variable (dbconnect in example) to require the dbConnect file

step 5. Create .env

- if you haven't made the .env with your server secrets do so now
- PORT, db_name, db_user, db_password, db_host, db_port

step 6: Setup models

- new folder for models. then index.js
  -index.js purpose is to import models to one location for reference from other files
- define tables routes
  - ex const user=require('./user')
- create func to auto poppulate new tables if they don't exist
  - sudo shorthand example: async func init {await user.sync()}
- call func: init()
  -export funcs

step 7: create new models for tables.
- create users and so on in different model files.
- define the tables using json object formatting and clarify each field by using field: {
  type: whatever type,
  allowNull: false/true,
  required: true,
  unique: false/true,
  etc
  }

//can run server but wont see info update in database yet

step 8: use the model/pull it in via controllers and routes.
-create controller and routes folders.
- define controller to find all data for users
- create an index.js to easily export all controllers
- define routes to orient data flow
    - see comments in notes for breakdown. EX line 14-18 of userRoutes.js

step 9: update the routes in app (server.js)
- test with a get in postman on the route
    - http://localhost:8000/api/users
    - should return status:200 and an open array

step 10: expand controllers and routes to other include others
    - create/login/put/delete/etc

step 11: include bcrypt steps here
    -stopping here for now for the time purposes. will push through later if there is free space to do so.


(PERSONAL NOTES)
to change mysql password in mysql command line client type in :
ALTER USER 'root'@'localhost' IDENTIFIED BY 'MyN3wP4ssw0rd';
followed by FLUSH PRIVILEGES

THIS IS INCOMPLETE. DID NOT PUSH INTO THE BCRYPT AND HASHING SEGMENT BUT HAVE A MAJORITY OF IT FINALIZED. REFER TO RECORDING 1 HOUR 7 MINUTES IN TO CONTINUE PROG
