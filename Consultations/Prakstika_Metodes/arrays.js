// ! objektu masiivs!!!

const brothers = [
    {race:"hobbit", height: 110, age:45, name:"Frodo Baggins"},
    {race:"human", height: 185, age:46, name:"Aragorn"},
    {race:"elf", height: 189, age:110, name:"Legolas"},
    {race:"dworf", height: 140, age:150, name:"Gimly"},
    {race:"human", height: 195, age:200, name:"Gandalf"},
];

//izvada vaardus
const names = brothers.map((element) => element.name);
console.log(names)


//izvada gadus
const ages = brothers.map((brother)=> brother.age);
console.log(ages);


//izvada rasi un vaardus
const racesNames = brothers.map((brother) => (brother.race + " " + brother.name));
console.log(racesNames);

// lieli vai mazi
const sizes = brothers.map((brother) => {
    if(brother.height>=170){
        return "high";
    }
    return "small";
});

console.log(sizes)


//pievieno katram gadu klaat
brothers.forEach((brother) => brother.age += 1);
console.log(brothers)

let sum = 0;
for(let i = 0; i<ages.length; i++){
    sum += ages[i]
}
console.log(sum);


// ! ar reduce metodi, ietver divus argumentus. 1- acc(accumelate)2. current
const sum2 = ages.reduce((acc, current) => acc+current, 0) 
//saak iteraaciju no nulle, no 0 
// iteration -- acc -- current 
  // 1         -- 0   -- 45
  // 2         -- 45  -- 46
  // 3         -- 91  -- 111
  // 4         -- 201 -- 151
  // 5         -- 351 -- 201

  // Аккумулятор (accumulator) - значение,
  // которое накапливает результат применения функции.
 // Текущий элемент массива (currentValue).
 // Текущий индекс (currentIndex) элемента в массиве.
 // Сам массив (array), к которому применяется метод reduce.
 // Функция callback должна возвращать новое значение аккумулятора
 // после обработки текущего элемента.

 // initialValue (необязательный): Начальное значение аккумулятора.
 // Если это значение указано,
 //  то оно будет использовано в качестве начального значения аккумулятора
 // при первом вызове функции callback.
 // Если initialValue не указан, то первый элемент массива станет
 // начальным значением аккумулятора.

// ! Комбинация map+reduce
 // общая высота наших героев

 const totalHeight = brothers.reduce((acc, brothers) => acc + brothers.height, 0)
 console.log(totalHeight)

//2. variants
 //var veidot keediiti
 const totalHeight1 = brothers
 .map((brother) => brother.height) // auguma masiivs
 .reduce((acc, height) => acc + height, 0)
 console.log(totalHeight1)

 const str = "Gandalf, Sauron, Saruman, Legolas, Elrond";
  const namesArr = str.split(", ");// метод сплит принимает разделитель
  console.log(namesArr);// ["Gandalf", "Sauron", "Saruman", "Legolas", "Elrond"]

  // Метод join
  const newString =namesArr.join("!");
  console.log(newString);// Gandalf!Sauron!Saruman!Legolas!Elrond

  // Метод find-  возвращает первое совпадение с заданным условием
const person = brothers.find((brother)=> brother.race === "human");
console.log(person);

// Метод filter
// Возвращает все элементы удовлетворяющие условию
// не мутирующий массив (не изменяет исходный массив)
//Выбрать тех кто старше 100 лет
const oldBrothers = brothers.filter((brother)=> brother.age >100);
console.log(oldBrothers);
