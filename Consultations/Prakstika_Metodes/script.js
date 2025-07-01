// spread syntax

let str1 = "hello";
let str2 = str1;
str1 = "Good";
console.log(str1)
console.log(str2)


const fruits = ["", "", ""]
const fruits2 = fruits;
fruits[0] = "banana";
console.log(fruits)
console.log(fruits2)

// kaa pareizi paarkopeet masiiva elementus pareizi jaunaa masiivaa

const cars = ["Bmw", "Audi", "Mercedes"];

const carsCopy = [...cars];
carsCopy[0] = "Opel"; // nomaina 0to indeksu uz Opel
console.log(cars)
console.log(carsCopy)

// kaa apvienot masiivus vienaa

const cities1 = ["Berlin", "Paris"];
const cities2 = ["London", "Budapest"];
const joinedCities = [...cities2, ...cities1];

console.log(joinedCities)

//savienot masiivus un pievienot jaunu

const vegetables = ["cucumber", "tomato"];
const newVegetables = [...vegetables, "carrot"];
console.log(newVegetables);

