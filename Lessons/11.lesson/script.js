// ! объекты

// пример объявления объекта
const frodo = {
  name: "Frodo",
  age: 30,
  race: "hobbit",
  hasMagic: false,
  height: 60,
};

// обращение к значению по ключу

frodo.hasMagic = true;

console.log(frodo.name);

// ! методы массивов II (примеры с объекта)

const brothers = [
  { name: "Gandalf", height: 160, hasMagic: true, race: "maia", age: 2500 },
  { name: "Legolas", height: 170, hasMagic: true, race: "elf", age: 900 },
  { name: "Frodo", height: 60, hasMagic: false, race: "hobbit", age: 30 },
  { name: "Saruman", height: 155, hasMagic: true, race: "maia", age: 2000 },
  { name: "Aragorn", height: 160, hasMagic: false, race: "human", age: 120 },
  { name: "Sam", height: 63, hasMagic: false, race: "hobbit", age: 32 },
];

// * map() - map metode!!!!!!!!!!!!!!!!!!
// не мутирующий
// итерируется по всем элементам исходного массива
// с каждым элементом можно произвести желаемую операцию
// создает новый массив (под него нужно создать переменную)
// ! длинная нового массива всегда равна длине исходного

// * пример 1
// за место el на каждой итерации приходит следующий элемент массива
const arr1 = brothers.map((el) => console.log(el));

// * пример 2
// hero или el - это название переменной которе мы придумываем сами - как обращаться к элементам итерируемого массива
const arr2 = brothers.map((hero) => hero.name + " is " + hero.race);

console.log(arr1);
console.log(arr2);
console.log(brothers);

const ages = brothers.map((element) => element.age);
console.log(ages);

// savieno vairaakas vieniibas caur +

const namesAndAges = brothers.map((x) => x.name + " : " + x.age);
console.log(namesAndAges);

// * пример 3
const arr3 = [];

const arr4 = brothers.map((el) => arr3.push(el.name));

console.log(arr3); // массив из имен которые добавляли на каждой итерации
console.log(arr4); // массив из возвращенных значений изменяющейся длинны arr3

// ! filter() metode !!!!!!!!!!!!!!!!!!!!!!!

// не мутирующий
// создает новый массив на основе предыдущего
// в  него войдут только те элементы которые удовлетворяют условию после '=>'
// ! метод всегда возвращает массив (если элментов)

//const brothers1 = brothers.filter(el => el.hasMagic !== true)
const brothers1 = brothers.filter((el) => el.hasMagic === true);
const brothers2 = brothers.filter(
  (el) => el.hasMagic === false && el.height > 60
);

console.log(brothers2);

const brothers3 = brothers.filter((el) => el.race === "alien");
console.log(brothers3);

// ! find()   vienmeer aatraaks kaa filter(), jo nav jaaiziet caur visu masiivu
// ja meklee vienu elementu, tad ir labi, bet ne vairaakus
// не мутирующий
// возвращает первый элемент удовлетворяющий условию после '=>'

const brother1 = brothers.find((el) => el.name === "Saruman");
console.log(brother1);

// ! slice()
// не мутирующий
// возвращает измененный массив
// из исходного мы вырезаем ту часть которая нам нужна
// 1й - c какого индекса начинаем (включительно)
// 2й - до какого индекса (не включительно)

const shortBrothers = brothers.slice(1, 4); // 1-4 indekss

console.log(brothers);
console.log(shortBrothers);

const lastBrothers = brothers.slice(-2); // оставит два элемента с конца

console.log(lastBrothers);

// ! splice()  izgriez un atgriez tikai to ko vajag. izmaina. mutee sakotnejo masiivu.

// мутирующий
// удаляет
// принимает два аргумента:
// 1й - c какого индекса  (включительно)
// 2й - кол-во удаляемых элементов ⚠️
// если передавать один - это будет значит удаляем 'до самого конца'

console.log(namesAndAges);

namesAndAges.splice(1, 3); // izdzesis triis elements, saakot ar indekss 1.

console.log(namesAndAges);

// ! sort()  - sakaarto logiskaa seciibaa
// мутирующий метод
// метод сортировки
// по умолчанию работает как сортировка строк
// для того чтобы отсортировать числа по порядку - нужна функция сортировки

const brothersNames = brothers.map((el) => el.name);
brothersNames.sort(); // сортировка строк

console.log(brothersNames); //

const brothersAges = brothers.map((el) => el.age);
brothersAges.sort((a, b) => a - b); // сортировка чисел

console.log(brothersAges);

brothers.sort((a, b) => a.name.localeCompare(b.name)); // ! сортировка объектов в массивах

// ! reduce()  izmanto reti
// поочередно выполняет операции с элементами (el) производя вычисления с аккумулируемым значением (acc)

// 1. 1й аргумент функция с действием
// 2. 2й - начальное значение для acc

const sumOfAges = brothersAges.reduce((acc, el) => acc + el, 0);

const sumOfNames = brothersNames.reduce(
  (acc, el) => acc + "этот " + el + ", ",
  "Герои: "
);

console.log(sumOfNames);

const starWarsHeroes = [
  { name: "Anakin Skywalker", age: 30, isJedi: true },
  { name: "Luke Skywalker", age: 25, isJedi: true },
  { name: "Han Solo", age: 35, isJedi: false },
  { name: "Princess Leia", age: 30, isJedi: false },
  { name: "Obi-Wan Kenobi", age: 60, isJedi: true },
];

// 1.2 filter() 
// nemuteejosa, tapeec jauna peremennaja
const starwarsHeroesAges = starWarsHeroes.filter((el) => el.age < 40);
const youngJedi = starWarsHeroes.filter(el => (el.isJedi === true) && (el.age < 40))

console.log(starwarsHeroesAges);
console.log(youngJedi)

//1.3 filter + reduce /
// nemuteejosa, tapeec jauna peremennaja
const jediAge = starWarsHeroes.filter(el => el.isJedi).reduce((acc, el) => acc + el.age, 0);
const totalAge = starWarsHeroes.reduce((acc, el) => acc + el.age, 0);

console.log(totalAge);
console.log(jediAge);


// * 1.4 map() + ...spread operator
// копируем все сво-ва массива и изменяем только нужные из них
const olderHeroes = starWarsHeroes.map((el) => (el.age += 10));

const olderHeroes1 = starWarsHeroes.map(el => ({...el, age: el.age +10}))

console.log(olderHeroes);
console.log(olderHeroes1);

// * 1.5 map() + ...spread operator + ternary operator

const replaceHero = starWarsHeroes.map((hero) =>
  hero.name === "Anakin Skywalker"
    ? { name: "Darth Vader", isJedi: false, age: 50 }
    : hero
);


const sithRevenge = starWarsHeroes.map((el) => (el.name === "Anakin Skywalker" ? { ...el, name: "Darth Vader", isJedi: false } : el));


console.log(sithRevenge)
console.log(replaceHero)

//1.6

const shortInfo = starWarsHeroes.map(({name, isJedi}) => ({name,isJedi}))

const shortHeroes = starWarsHeroes.map(el => ({name: el.name, isJedi: el.isJedi}))


console.log(shortInfo)
console.log(shortHeroes)
