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