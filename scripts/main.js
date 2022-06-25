
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

const bookchoices = [book1.name, book2.name, book3.name]

let books = { book1, book2, book3 }

const viewbooks = () => {
    document.querySelector('.result3').innerHTML = bookchoices;
}





const createWorkerList = (value) => {
    for (let i = 0; i < value; i++) {
        let ol = document.createElement("ul");
        let li = document.createElement("li");
        li.innerHTML = i;
        li.id = `id${i}`
        ol.appendChild(li)
        document.querySelector('.result').appendChild(ol)
    }
    localStorage.setItem('RENDERED', JSON.stringify('true'));
    console.log(localStorage.getItem('RENDERED'))
}



const spawnworker = async (activated) => {
    const rendered = (localStorage.getItem('RENDERED'))
    console.log(JSON.parse(rendered))

    if (JSON.parse(rendered) != "true") {
        console.log("ready for rendering")
        createWorkerList(4)
    }

    const useWorker = []
    const workerList = []
    for (let i = 0; i < window.navigator.hardwareConcurrency; i++) {
        let newWorker = {
            worker: new Worker('worker.js'),
            val: i,
            inUse: false,
            completed: false,
        };
        workerList.push(newWorker)
    }
    console.log(workerList)
    for (let i = 0; i < activated; i++) {
        workerList[i].inUse = true
        useWorker.push(workerList[i])
    }
    console.log(workerList)
    await runprocess(useWorker)
    console.log("completed")
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const runprocess = async(worker) => {
    finished = []
    console.log("ITERATION", worker.length)
    worker.forEach((w) => {
        w.worker.postMessage(bookchoices);
        w.worker.onmessage = function (event) {
            viewbooks();
            e1 = event.data.e1;
            e2 = event.data.e2;
            let renderEvent = document.querySelector(`#id${w.val}`).innerHTML = e1 + e2
            if (renderEvent == "completed") {
                document.querySelector(`#id${w.val}`).innerHTML = ""
                w.completed = true
                finished.push(w)
            }
        }
    })

    console.log("FINISHED", finished)
    // await sleep(2000);
    console.log("LENGTH", worker.length)
    // spawnworker(worker.length)

}


const killWorkers =  function() {
    localStorage.setItem("RENDERED", false)
    console.log(localStorage.getItem("RENDERED"))
}

const activateWorker = () => {
    spawnworker(1)
}
window.x = someFunction = function () {
    console.log("123")
    return 123
};

export {someFunction, x};










