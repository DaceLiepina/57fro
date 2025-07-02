// найдем первую кнопку по id
const btn = document.getElementById("magic-btn");


btn.addEventListener('click', () => {
  // при нажатии на первую кнопку

  // скопируем ее - получилась вторая кнопка. Ее можно использовать.

  const clonedBtn = btn.cloneNode(true);
  // задали id
  clonedBtn.id = "magic-btn-2";
 
clonedBtn.textContent = "Я изменю тебя";
clonedBtn.style.color = white;
clonedBtn.style.backgroundColor = "#a78b71"

document.body.append(clonedBtn)

  // работайте с clonedBtn
  // ваш код начинается здесь
  
})

// здесь можете создать EventListener для второй кнопки