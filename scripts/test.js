function book(name, value){
    this.name = name
    this.value = value
}


let book1 = new book("harry potter", "10")
let book2 = new book("percy jackson", "10")
let book3 = new book("dune", "10")

// randomly select
let merged = {book1, book2, book3}
console.log(merged)


let mylength = Object.keys(merged).length;
let randomiser = Math.floor((Math.random() * mylength) + 0);
console.log(Object.values(merged[Object.keys(merged)[randomiser]]))