const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

console.log("welcome");
// Where we will keep books
let books = [];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/book', (req, res) => {
    const book = req.body;
    console.log(book, "added ");
    books.push(book);
    res.send('Book added to the database');
    res.send("<html> <head>server Response</head><body><h1> This page was render direcly from the server <p>Hello there welcome to my website</p></h1></body></html>");
});

let counter = [];

app.get("/", (req, res) => {
    res.send("<html><head>server Response</head><body><button onclick=myFunction()>Click Me</button></body></html>");
});


app.get('/books', (req, res)=> {
    res.json(books);
})
app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
