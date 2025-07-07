const form = document.querySelector("#book-form");
const ul = document.querySelector("#books-list");
const clearBtn = document.querySelector("#clear-list");

let bookList = [
  { title: "Гарри Поттер", author: "Джоан Роулинг" },
  { title: "Железное пламя", author: "Ребекка Яррос" },
  { title: "Зеленый свет", author: "Мэттью Макконахис" },
  { title: "Граф Аверин", author: "Виктор Дашкевич" },
];

function allBooks() {
  ul.innerHTML = "";
  bookList.map((book) => {
    const li = document.createElement("li");
    li.textContent = `"${book.title}", от: ${book.author}`;
    ul.appendChild(li);
  });
}

allBooks();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = event.target.title.value.trim().toLowerCase();
  const author = event.target.author.value.trim().toLowerCase();

  const exists = bookList.find(
    (b) => b.title.toLowerCase() === title && b.author.toLowerCase() === author
  );
  if (exists) {
    alert("Эта книга уже в списке!");
  } else {
    bookList.push({
      title: event.target.title.value.trim(),
      author: event.target.author.value.trim(),
    });
    allBooks();
  }
  event.target.title.value = "";
  event.target.author.value = "";
});

clearBtn.addEventListener("click", () => {
  bookList = [];
  allBooks();
});
