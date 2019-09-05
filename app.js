const express = require('express');
const app = express();
const cors = require('cors');
const models = require('./models');

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

app.get('/books', (req,res) => {

    models.Book.findAll().then(books => {
        res.json(books)
    })

})

app.post('/add-book',(req,res) => {
    let title = req.body.title
    let genre = req.body.genre
    let publisher = req.body.publisher
    let year = req.body.year
    let imageurl = req.body.imageurl

    let book = models.Book.build({
        title: title,
        genre: genre,
        publisher: publisher,
        year: year,
        imageurl: imageurl
    })

    book.save().then((savedBook) => {
        res.json({success: true})
    })

})

app.post('/delete-book',(req,res) => {
    let bookId = parseInt(req.body.bookId)

    let result = models.Book.destroy({
        where: {
            id: bookId
        }
    }).then((result) => {
        console.log(result)
        res.redirect('/books')
    })

})

app.get('/express-backend',(req,res) => {
    res.send({express: "BACKEND CONNECTED TO REACT"})
})


app.listen(3001,() => {console.log('Server is running...')})
