const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3000;

console.log("welcome");

// Storage of books
let books = [];

app.use(cors());


// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.post("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/new-book.html'));
})

app.post('/book', (req, res) => {
    const book = req.body;
    console.log(book, "added ");
    books.push(book);
    res.sendFile(path.join(__dirname, '/book-added.html'));
});

app.post('/books', (req, res) => {
    res.json(books);
})

app.post('/MT', (req, res) => {
    res.sendFile(path.join(__dirname, '/multithreading/index.html'))
})

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
