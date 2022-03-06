const express = require('express')
const app = express()
const PORT = 3000
const session = require('express-session')



app.use(session({
    secret: "authSecret",
    resave: false,
    saveUninitialized: true
}))
//Capturar data
app.use(express.urlencoded({ extended : false}));
app.use(express.json())

// Enrutadores
const apiRouter = require('./routes/indexApi')
const authRouter = require('./routes/auth')




// Endpoints
app.use('/auth', authRouter)
app.use('/api', apiRouter)


app.listen(PORT, ()=>{
    console.log(`Servidor levantado en http://localhost:${PORT}`)
})