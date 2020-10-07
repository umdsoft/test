const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const searchRouter = require('./routes/search')
const authRouter = require('./routes/auth')

app.use(bodyParser.json())

app.get('/', (req,res)=>{
    res.send("Hello Server")
})

app.use('/search',searchRouter)
app.use('/auth',authRouter)

const PORT = 3000;

app.listen(PORT, ()=>{
    console.log('Server ishga tushdi')
})
