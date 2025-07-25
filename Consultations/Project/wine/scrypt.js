fetch("https://api.sampleapis.com/wines/whites")
.then (res => res.json())
.then (data =>{
    console.log(data);
   const container = document.getElementById("wineContainer");


data.forEach(wine => {
let rating = 0;
if (wine.rating && wine.rating.average) {
rating = wine.rating.average;
}

if (rating >= 4.8) {
const card = document.createElement('div');
card.classList.add('wine-card');

if (rating >= 4.9) {
card.classList.add('green');
} else if (rating >= 4.8) {
card.classList.add('blue');
}


const img = document.createElement('img');
img.setAttribute('src', wine.image);
img.setAttribute('alt', wine.wine);


const title = document.createElement('h3');
title.textContent = wine.wine;


const winery = document.createElement('p');
winery.innerHTML = '<strong>Winery:</strong> ' + wine.winery;

const ratingText = document.createElement('p');
ratingText.innerHTML = '<strong>Rating:</strong> ' + rating;


card.appendChild(img);
card.appendChild(title);
card.appendChild(winery);
card.appendChild(ratingText);


container.appendChild(card);
}
});
})
.catch(error => {
console.error('Kļūda ielādējot vīnus:', error);
});

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

