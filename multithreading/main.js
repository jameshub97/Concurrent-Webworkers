alert("test")

const first = document.querySelector('#number1');
const second = document.querySelector('#number2');

let book1 = new Object();
book1.name = "Harry Potter";
book1.value = 10;

let book2 = new Object();
book2.name = "Percy Jackson";
book2.value = 10;

let book3 = new Object();
book3.name = "Dune";
book3.value = 10;

bookchoices = [book1.name, book2.name, book3.name]

let books = {book1, book2, book3}

viewbooks = () => {
    document.querySelector('.result3').innerHTML = bookchoices;
    }

myque = []    
que = (name) => {
    myque.push(name)
    document.querySelector('.result6').innerHTML = myque;
}

update = () => {
    document.querySelector('.result5').innerHTML = 
    book1.name + book1.value + "\n" +
    book2.name + book2.value + "\n" + 
    book3.name + book3.value + "\n";
}

cleansestack = () =>{
    if(book1.name.includes(myque[0])){
        book1.value = book1.value -1;
        update();
    }
    if(book2.name.includes(myque[0])){
        book2.value = book.value -1;
        update();
    }
    if(book3.name.includes(myque[0])){
        book3.value = book3.value -1;
        update();
        
    }
  
    myque.shift()
    document.querySelector('.result6').innerHTML = myque;

}


startw2 = () => {
    if (window.Worker) {
        const w2 = new Worker("worker.js");
        w2.postMessage(bookchoices);
        w2.onmessage = function (event) {
            viewbooks();
            e1 = event.data.e1;
            e2 = event.data.e2;
            document.querySelector('.result2').innerHTML = event.data.e1 + event.data.e2;;
            if (bookchoices.includes(e2)) {
                let newArray = books.filter(function (f) { return f !== e1 })
                document.querySelector('.result4').innerHTML = newArray + " filtered";
                document.querySelector('.result2').innerHTML = e1 + " is available";
                bookchoices = newArray;
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




