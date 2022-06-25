import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import {fileURLToPath} from 'url';

console.log("welcome");

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Storage of books
let books = [];

app.use(cors());
app.use(express.static(__dirname + '/scripts'));

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'DOM/index.html'));
});

app.post("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'DOM/new-book.html'));
})

app.post('/book', (req, res) => {
    const book = req.body;
    console.log(book, "added ");
    books.push(book);
    res.sendFile(path.join(__dirname, 'DOM/book-added.html'));
});

app.post('/books', (req, res) => {
    res.json(books);
})

app.post('/workers', (req, res) => {
    res.sendFile(path.join(__dirname, '/DOM/webworkers.html'))
})

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));