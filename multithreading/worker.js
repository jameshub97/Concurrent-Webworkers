function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function workerstart() {
   onmessage = async function (event) {
    let books = event.data;
    let arrlength = books.length;
    let randomiser = Math.floor((Math.random() * arrlength) + 0);
    postMessage({
      e1: "calling api",
      e2: "..."
    })
    await sleep(2000);
    postMessage({e1: "Chosen: ", e2: books[randomiser]});
    await sleep(2000);
    if (arrlength > 0) {
      postMessage({e1: "completed",
                  e2: ""})
                              
    }
  }
  }


workerstart();
