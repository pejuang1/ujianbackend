const express=require('express')
const app=express()
const BodyParser=require('body-parser')
const cors=require('cors')

const PORT = 7777

app.use(cors())// buat izin frontend ke backend
app.use(BodyParser.urlencoded({ extended: false }));// ini buat foto
app.use(BodyParser.json())

app.get('/',(req,res)=>{
    return res.status(200).send(`<center><h1>Ini Homepage</h1></center>`)
})

const {managerouter} = require ('./routers')

app.use('/movies', managerouter)

app.listen(PORT,()=>console.log(`aktif di port ${PORT}`))