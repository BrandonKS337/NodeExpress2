//this is the file to set up the database connection itself

'use strict'

const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(process.env_dbName,
    process.env.DB_USER, process.env.DB_PASSWORD, {
        host: process.env.DB_HOST,
        dialect: "mysql"
    }); 
    //dbName is placeholder here until db is created
    //this segment tells sequelize to search for db and try to access it using an established uer/password body that we set up in our .env file.
    //it also tells the app that we are using a mysql database by defining the dialect

    const connectMysql = async () => {
        try {
            await sequelize.authenticate()
            console.log(`Successful connection to MYSQL database ${process.env.DB_NAME}`)
        } catch(error){
            console.error('Unable to connect to MYSQL database', error)
            process.exit(1)
        }
    }

    connectMysql() //created our function to call server and wait for connection response in above code. This line just calls that function putting it into action

    module.exports = {
        Sequelize: sequelize, //this allows us to export sequelize in or modules
        connectMysql //exports the connection in case we need to instantiate the function elsewhere
    }

