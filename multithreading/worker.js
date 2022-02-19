function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function workerstart() {
   onmessage = async function (event) {
    let merged = event.data;
    postMessage(merged)
    let mylength = Object.keys(merged).length;
    let randomiser = Math.floor((Math.random() * mylength) + 0);
    let result = Object.values(merged[Object.keys(merged)[randomiser]])
    postMessage(result);
    // await sleep(2000);
    // postMessage({
    //   e1: "calling api",
    //   e2: "..."
    // })
    // await sleep(2000);
    // postMessage({ e1: books, e2: "" });
    // await sleep(2000);
    // if (arrlength > 0) {
    //   postMessage({e1: "completed",
    //               e2: ""})              
    }
  }
}

workerstart();
