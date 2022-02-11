let books = ["Harry Potter", "Percy Jackson", "Dune"]
let arrlength = books.length;


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function workerstart() {
    let randomiser = Math.floor((Math.random() * arrlength)+0);
    postMessage("thinking")
    await sleep(2000);
    postMessage("calling api")
    await sleep(2000);
    postMessage(`Chosen ${books[randomiser]}`)
    await sleep(2000);
    if(arrlength > 0){
      workerstart();
    }
  }

workerstart();
