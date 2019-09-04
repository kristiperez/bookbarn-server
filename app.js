const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

app.get('/books', (req,res) => {
    res.json()
})

app.post('/add-book',(req,res) => {

})

app.post('/delete-book'),(req,res) => {
    
}

app.get('/express-backend',(req,res) => {
    res.send({express: "BACKEND CONNECTED TO REACT"})
})


app.listen(3001,() => {console.log('Server is running...')})
