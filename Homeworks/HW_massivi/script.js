//### Задание 1 Создайте массив из следующих элементов: "Семен", "Иван", "Петр", "Татьяна". Создайте еще один массив с возрастами: 18, 27, 74, 34; Создайте и заполните при помощи цикла этот новый массив новыми элементами по образу: "Семен 18 лет/годов"

const names = ["Семен", "Иван", "Петр", "Татьяна"];
const ages = [18, 27, 74, 34];

let result = [];
for (let i = 0; i < names.length; i++) {
  result.push(names[i] + " " + ages[i] + " лет/годов");
}

console.log(result);

//### Задание 2 Используя пройденные на занятии методы массива получите из этого массива новый массив, в котором элементы идут в обратной последовательности. Используйте цикл, а не метод reversed()!

const numbers = [4, 8, 15, 16, 23, 42];

const reversed = [];

for (let i = numbers.length - 1; i >= 0; i--) {
  reversed.push(numbers[i]);
}

console.log(reversed);

// ### Задание 3 Создайте пустой массив fruits. добавьте в массив следующие фрукты: "яблоко",  Удалите последний элемент из массива и сохраните значение в переменной. Добавьте его в начало массива. Выведите fruits в консоль

let fruits= [];
fruits.push("яблоко", "банан", "апельсин");

let lastFruit = fruits.pop();
fruits.unshift(lastFruit);

console.log(fruits);

//Объедините fruits с массивом veggies (в него добавьте строки овощи) через spread в массив fruitsAndVeggies Используя деструктуризацию заведите переменную под каждый элемент нового массива. Выведите fruitsAndVeggies в консоль

let veggies = ["cucumber", "carrot", "tomate"];
let fruitAndVeggies = [...fruits, ...veggies];

let[fruit1, fruit2, fruit3, veg1, veg2, veg3] = fruitAndVeggies;

console.log(fruitAndVeggies);
console.log(fruit3, veg3);




