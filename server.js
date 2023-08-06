const express = require('express')
const app = express()

require('dotenv').config()

let dbConnect = require('./dbConnect')

app.use(express.json()) //auto parses json data for us with this line

app.get('/', (req, res) => { //sets up test route to see if app is running 
    res.json({message: "Hello world, you crazy son of a gun!"})
})

const PORT = process.env.PORT || 8000 //sets up the port that app will utilize

app.listen(PORT, () => {
    console.log(`Server is up and running on port: ${PORT}`)
})