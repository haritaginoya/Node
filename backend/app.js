const express = require('express')
require('dotenv').config(); 
const port = process.env.PORT || 5000
const connectDB = require('./config/db')
console.log(port);
console.log(process.env.PORT);

connectDB()

const {errorHandler} = require('./middleware/errorMiddleware') 

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.use('/api/goals',require('./routes/goalsRoutes'))
app.use(errorHandler)

app.listen(port,() =>{
    console.log(`Server Started http://localhost:${port}`)
})




