const dogImageElement = document.getElementById("dog-image");
const newDogButton = document.getElementById("new-dog-button");


function fetchNewImage(){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then ((res) => res.json())
    .then ((obj) => {
        const {message} = obj;

        dogImageElement.src = message; // sanjemam atlauju caur src tikt pie bildes7elementa
    });
}

fetchNewImage();

newDogButton.addEventListener('click',fetchNewImage)