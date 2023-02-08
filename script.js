
// Task1

// Создать функцию которая будет удалять людей из массива по индексу, который мы
// передадим параметром.
// const arr = ['Vasya', 'Petya', 'Alexey']
// removeUser(arr, 1)
// console.log(arr) /// ['Vasya', 'Alexey']

// etc.

function removeUser(arr, index) {
  arr.splice(index, 1);
}

// Task2

// Создать функцию которая вернет все ключи обьекта переданного параметром
// const obj = { name: 'Vasya', age: 1}
// getAllKeys(obj) /// ["name", "age"]

// etc.


function getAllKeys(obj) {
  return Object.keys(obj);
}

// Task3

// Создать функцию которая вернет все значения объекта переданного параметром



function getAllValues(obj) {
  return Object.values(obj);
}
// task4

// Содать функцию,где мы первым параметром передадим объект с новым кандидатом,
// а вторым параметром - id любого кондидата в массиве condidateArr. Функция
// должна будет вставить кандидата переданного через первый параметр в массив
// перед кондидатом у которого id равно тому что передали во-втором параметре


function insertIntoarr(arr, obj, candidateId) {
  const candidateIndex = arr.findIndex(
    (candidate) => candidate.id === candidateId
  );
  arr.splice(candidateIndex, 0, obj);
}

// task5

// Создайте класс Condidate который будет принимать параметром объект из массива
// condidateArr. Добавить метод с именем state который вернет штат в котором
// живает наш кондидат. Информация о штате находится в свойстве address и это
// третья запись после запятой.



class Condidate {
  constructor({ address }) {
    this.state = address.split(', ')[2];
  }
}

// task6

// Создать функцию которая выведет массив с названиями фирм взятыми из св-ва
// company. Если фирмы повторяются в массиве, то удалить дубликаты. Все так же
// используем массив candidateArr



function getCompanyNames(arr) {
  const companies = new Set();
  for (let candidate of arr) {
    companies.add(candidate.company);
  }

  return [...companies];
}
// task7

// Создать функцию которая выведет мне массив id всех кондидатов, которые были
// зарагестрированны в том же году что и год указанный в параметре.


function getUsersByYear(arr, year) {
  return arr
    .filter(
      (candidate) => new Date(candidate.registered).getFullYear() === year
    )
    .map((candidate) => candidate._id);
}

// task8

// Создать функцию которая вернет массив с экземплярами - кандидатами,
// отфильтрованных по кол-ву непрочитанных сообщений. Смотрим св-во greeting,
// там указанно это количество в строке, Вам надо достать это число из строки и
// сверять с тем что в параметер вашей функции. Все так же используем массив
// candidateArr



function getCondidatesByUnreadMsg(arr, messagesAmount) {
  return arr.filter(
    (candidate) => Number(candidate.greeting.split(' ')[5]) === messagesAmount
  );
}

// task9

// Создать функцию которая вернет массив по свойству gender. Все так же
// используем массив candidateArr



function getCondidatesByGender(arr, gender) {
  return arr.filter((candidate) => candidate.gender === gender);
}

console.log(getCondidatesByGender(condidateArr, 'male'));