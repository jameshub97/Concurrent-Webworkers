import test from 'main.js'

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function workerstart() {
  onmessage = async function (event) {
    let books = event.data;
    let arrlength = books.length;
    let randomiser = Math.floor((Math.random() * arrlength) + 0);
    postMessage({
      e1: "thinking",
      e2: "..."
    })
    await sleep(Math.floor((Math.random() * 1000) + 1));
    const selected = books[randomiser]
    postMessage({ e1: "Chosen: ", e2: selected });
    await sleep(2000);
    postMessage({
      e1: "completed",
      e2: ""
    })
    await sleep(2000);
    test()
    
    console.log("completed")

  }
}




workerstart();
