const express = require('express');

require('dotenv').config();

const workoutRoutes = require('./routes/workouts')

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


// routes
app.get('/', (req, res) => {
    res.json({message: 'Welcome to workout app'})
} )


//listen for request
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
})