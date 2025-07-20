function getRandomCoctail(){
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
     .then( response => response.json())
     .then( data => { 
        const coctail = data.drinks[0];
        const coctailName = coctail.strDrink;
        const coctailImage = coctail.strDrinkThumb;
        const coctailInstructions = coctail.strInstructions;

        document.getElementById("coctail-image").src = coctailImage;
        document.getElementById("coctail-description").textContent = `Название: ${coctailName}. Описание: ${coctailInstructions}`;
})
.catch(error =>{
    console.log("Ошибка при загрузке коктейля", error);
    document.getElementById("coctail-description").textContent = "Не удалось загрузить коктейль";
})
}
// getRandomCoctail();