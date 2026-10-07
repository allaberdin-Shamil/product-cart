// Задание №3-обьект в котором перчислены персоналых данных 

const personalData = {
  name: "Shamil",
  surname: "Allaberdin",
  age: 23,
  countries: "Russia",
  republic: "Bashkortostan",
  city: "Baimak",
  profession: "welder",
  organization: "IPS",
  email: "shamilallaberdin@gmail.com",
};

console.log(personalData);

// Задание №4-оьект в перчислены данных авто и добавленно собственник

const vehicleDetails = {
  brand: "Lada",
  model: "Kalina",
  yearOfRelease: 2007,
  color: "swamp",
  transmission: "mechanical",
  owner: personalData,
};

console.log(vehicleDetails);
console.log(vehicleDetails.owner.name);
console.log(vehicleDetails.owner.surname);

//Функция согласно №5 заданию, используя данные авто

function  addMaxSpeed(vehicleDetailsObject) {
  if (!vehicleDetailsObject.hasOwnProperty("maxSpeed")) {
    vehicleDetailsObject.maxSpeed = 160;
  }
}

addMaxSpeed(vehicleDetails)
console.log(vehicleDetails)

//Функция согласно заданию №6

function getProperty(personalData, key) {
  return personalData[key];
}

console.log(getProperty(personalData, "name"));

//Массив согласно заданию №7 продуктов линейки Lada (согласен очень оригинально)

const сarDealershipLada = [
  "Lada Kalina",
  "Lada Granta",
  "Lada XRAY",
  "Lada Vesta",
  "Lada Iskra",
]

//Массив согласно заданию №8, массив с 3 обьектами и добавление 4 обьекта

const fantasyBooks = [
  {
    title: "Дитя мёртвой луны",
    author: "Александр Костенко",
    year: 2021,
    books: 9,
    genre: "Tемное фэнтези, РеалРПГ",
  },

  {
    title: "Нед",
    author: "Евгений Щепетнов",
    year: 2019,
    books: 6,
    genre: "Tемное фэнтези,  Героическое фэнтези",
  },

  {
    title: "Высшая Речь",
    author: "Вел Павлов",
    year: 2022,
    books: 12,
    genre: "Боевое фэнтези,  Бояръ-Аниме",
  },
]

fantasyBooks.push(
  {
    title: "Хризалида",
    author: "Джон Голд",
    year: 2019,
    books: 5,
    genre: "Tемное фэнтези,  Научная фантастика",
  },
)

//Массив согласно заданию №9, так-же обьединение при помощь spead c прышлым массивом, в новый 

const fantasyBooks2 = [
  {
    title: "Деревня",
    author: "Ковтунов Алексей, Дорничев Дмитрий",
    year: 2023,
    books: 8,
    genre: "Попаданцы, РеалРПГ",
  },

  {
    title: "Скелет-Рабочий",
    author: "Паркер Прах, Алексей Сказ",
    year: 2025,
    books: 5,
    genre: "Tемное фэнтези, РеалРПГ",
  },

  {
    title: "Студент хочет жить",
    author: "Борис Романовский",
    year: 2020,
    books: 6,
    genre: "Постапокалипсис, РеалРПГ",
  },
]

const IdlerLibrary = [...fantasyBooks, ...fantasyBooks2 ];

console.log(IdlerLibrary)

//Функция согласно заданию №9, узнает в массив IdlerLibrary редкость

function getAddRareStatus(IdlerLibrary) {
  return IdlerLibrary.map((book) =>
    book.year > 1999 ? (book.isRare = true) : (book.isRare = false)
  );
}

const allBookWithRarity = getAddRareStatus(IdlerLibrary);

console.log(allBookWithRarity)