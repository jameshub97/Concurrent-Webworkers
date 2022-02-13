function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function workerstart() {
  let foo = onmessage = async function (event) {
    let arrlength = event.data.length;
    let randomiser = Math.floor((Math.random() * arrlength) + 0);
    books = event.data[randomiser];
    postMessage({
      e1: "thinking",
      e2: "..."
    })
    await sleep(2000);
    postMessage({
      e1: "calling api",
      e2: "..."
    })
    await sleep(2000);
    postMessage({ e1: books, e2: "" });
    await sleep(2000);
    if (arrlength > 0) {
      postMessage({e1: "completed",
                  e2: ""})              
    }
  }
}

workerstart();
