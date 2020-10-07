const express = require('express')
const router = express.Router()

router.post('/register',(req,res)=>{
    const user = new Object({
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        phone: req.body.phone
    })

    res.status(201).json({
        success: true,
        data: user
    })
})

router.post('/login',(req,res)=>{
    res.send("Siz avtorizatsiyadan o`tdingiz")
})

module.exports = router;
