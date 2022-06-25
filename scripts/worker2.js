let foo = onmessage = function(event) {
    let arrlength = event.data.length;
    let randomiser = Math.floor((Math.random() * arrlength) + 0);
    books = event.data[randomiser];
    postMessage(books);
};

foo()