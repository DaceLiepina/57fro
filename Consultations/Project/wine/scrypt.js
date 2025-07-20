// 1. Отправить запрос на https://api.sampleapis.com/wines/whites
//  и получить (вывести в консоль) массив с данными о белых винах
// 2. Отрисовать карточки вин с рейтингом 4.8 и более (image, wine, winery, rating)
// 3. Стилизовать карточки (border, padding, border-radius).
//  Из контейнера сделать grid - 5 колонок + отступы
//  display: grid;
//  grid-template-columns: repeat(5, 1fr);
//  gap: 40px;
// 4. Если у вина рейтинг 4.9 и больше то покрасить карточку
//  в светло-зеленый. А если 4.8 - то в светло-голубой



const container = document.getElementById("wine-container");

fetch("https://api.sampleapis.com/wines/whites")
.then (res => res.json)
.then (data =>{
    console.log(data);

data.forEach(wine  =>{
    const raiting = 
})
})