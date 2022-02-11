const first = document.querySelector('#number1');
const second = document.querySelector('#number2');


startw1 = () => {
    if (window.Worker) {
        const w1 = new Worker("worker.js");
        w1.onmessage = function (event) {
            document.querySelector('.result').innerHTML = event.data;
            if(event.data = "thinking"){
                document.querySelector('.result3').innerHTML = event.data

            }
        }
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
        w2.onmessage = function (event) {
            document.querySelector('.result2').innerHTML = event.data;
        }
        killw2 = () => {
            w2.terminate();
            document.querySelector('.result2').innerHTML = "Terminated";
        }
    } else {
        alert('Your browser doesn\'t support web workers.');
    }
}



