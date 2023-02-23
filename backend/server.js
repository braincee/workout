const express = require('express');
const mongoose = require('mongoose')

require('dotenv').config();

const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')

// express app
const app = express();

//middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)


//routes
app.get('/', (req, res) => {
    res.json({message: 'Welcome to workout app'})
})

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
      //listen for request
      app.listen(process.env.PORT, () => {
      console.log('connected to db and listening on port', process.env.PORT)
    })
    })
    .catch((error) => {
      console.log(error)
    })

