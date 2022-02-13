const first = document.querySelector('#number1');
const second = document.querySelector('#number2');

let books = ["Harry Potter", "Percy Jackson", "Dune"];

viewbooks = () => {
    document.querySelector('.result3').innerHTML = books;
}

startw1 = () => {
    if (window.Worker) {
        const w1 = new Worker("worker.js");
        w1.postMessage(books);
        w1.onmessage = function (event) {
            e1 = event.data.e1;
            e2 = event.data.e2;
            document.querySelector('.result').innerHTML = event.data.e1 + event.data.e2;
            if (books.includes(e1)) {
                let newArray = books.filter(function(f){return f!== e1})
                document.querySelector('.result4').innerHTML = newArray;
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
            e1 = event.data.e1;
            e2 = event.data.e2;
            document.querySelector('.result2').innerHTML = event.data.e1 + event.data.e2;;
            if (books.includes(e1)) {
                let newArray = books.filter(function(f){return f!== e1})
                document.querySelector('.result4').innerHTML = newArray;
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




