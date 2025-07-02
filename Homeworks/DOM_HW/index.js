
const btn = document.getElementById("magic-btn");

btn.addEventListener("click", () => {
  const clonedBtn = btn.cloneNode(true);

  clonedBtn.id = "magic-btn-2";

  clonedBtn.textContent = "Я изменю тебя";
  clonedBtn.style.color = 'white';
  clonedBtn.style.backgroundColor = "#a78b71";
  document.body.appendChild(clonedBtn);
  clonedBtn.addEventListener("click", () => {
    btn.style.backgroundColor = "#9c4a1a";
    btn.style.color = "black";
  });
});


