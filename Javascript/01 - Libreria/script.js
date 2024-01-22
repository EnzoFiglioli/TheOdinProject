const books = document.getElementById('books');

var libreria = [];

function Book(title,year,author){
  this.title = title;
  this.year = year;
  this.author = author;
}

function addBook(book){
  libreria.push(book);
  
  books.innerHTML += `<p><b>Titulo:</b> ${book.title}</p>
               <p><b>Autor:</b> ${book.author}</p>
               <p><b>Año:</b> ${book.year}</p>
               <hr>
  `
}

book_1 = new Book("El fin de la eternidad",1955,"Isaac Asimov");
book_2 = new Book("El extranjero", 1970, "Albert Camus");
book_3 = new Book("Habitos Atomico",2018,"James Clear");
addBook(book_1);
addBook(book_2);
addBook(book_3);
