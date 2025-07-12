const bookTitle = document.getElementById("book-title");
const bookAuthor = document.getElementById("book-author");
const bookYear = document.getElementById("book-year");

fetch("https://daceliepina.github.io/my-favorite-book/book.json")
  .then((res) => res.json())
  .then((book) => {
    bookTitle.textContent += book.title;
    bookAuthor.textContent += book.author;
    bookYear.textContent += book.year;
  })
  .catch((err) => console.err("Error", err));
