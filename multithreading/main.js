const first = document.querySelector('#number1');
const second = document.querySelector('#number2');

function book(name, value){
    this.name = name
    this.value = value
}


let book1 = new book("harry potter", "10")
let book2 = new book("percy jackson", "10")
let book3 = new book("dune", "10") 

// workers simply randomly choose from an array, this message is sent
// this



document.querySelector('.result3').innerHTML = (Object.entries(books));


viewbooks = () => {
    for(var key in books){
        var value = books[key]
        document.querySelector('.result3').innerHTML = value;
    }
    
    if (books == []) {
        document.querySelector('.result3').innerHTML = "is empty";
    }
}


startw1 = () => {
    if (window.Worker) {
        const w1 = new Worker("worker.js");
        w1.postMessage(books);
        w1.onmessage = function (event) {
            viewbooks();
            e1 = event.data.e1;
            e2 = event.data.e2;
            document.querySelector('.result').innerHTML = event.data.e1 + event.data.e2;
            if (books.includes(e1)) {
                let newArray = books.filter(function (f) { return f !== e1 })
                document.querySelector('.result4').innerHTML = newArray + " filtered";
                document.querySelector('.result2').innerHTML = e1 + " is available";
                books = newArray;

            }
            if (e1 == "completed") {
                startw1();
            }
        };

        killw1 = () => {
            w1.terminate();
            document.querySelector('.result').innerHTML = "terminated";
        }
    } else {
        alert('Your browser doesn\'t support web workers.');
    }
}

startw2 = () => {
    if (window.Worker) {
        const w2 = new Worker("worker.js");
        w2.postMessage(books);
        w2.onmessage = function (event) {
            viewbooks();
            e1 = event.data.e1;
            e2 = event.data.e2;
            document.querySelector('.result2').innerHTML = event.data.e1 + event.data.e2;;
            if (books.includes(e1)) {
                let newArray = books.filter(function (f) { return f !== e1 })
                document.querySelector('.result4').innerHTML = newArray + " filtered";
                document.querySelector('.result2').innerHTML = e1 + " is available";
                books = newArray;
            }

            if (e1 == "completed") {
                startw2();
            }
        };
        killw2 = () => {
            w2.terminate();
            document.querySelector('.result2').innerHTML = "terminated";
        };
    } else {
        alert('Your browser doesn\'t support web workers.');
    }
};




