const express = require('express')
require('dotenv').config(); 
const port = process.env.PORT || 5000
const connectDB = require('./config/db')

connectDB()

const {errorHandler} = require('./middleware/errorMiddleware') 

const app = express()

// parse json format
app.use(express.json()) 

// for x-www-form-urlencoded
app.use(express.urlencoded({extended: true}))

app.use('/api/goals',require('./routes/goalsRoutes'))
app.use(errorHandler)

app.listen(port,() =>{
    console.log(`Server Started http://localhost:${port}`)
})



