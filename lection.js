// const roleField = "roleName";
// const data = {
//    id: 151,
//    login: "user147",
//    password: "blnmv!23e4",
//    [roleField]: "admin",
//    go() {
//       console.log("go");
//    },
//    test: {
//       test1: "123",
//    },
// };

// const jsonData = JSON.stringify(
//    data,
//    (key, value) => {
//       if (key === roleField) {
//          return null;
//       }
//       if (typeof value === "string") {
//          return value.toUpperCase();
//       }
//       if (typeof value === "number") {
//          return value * 10;
//       }
//       return value;
//    },
//    4
// );
// console.log(jsonData);

// const parseData = JSON.parse(jsonData, (key, value) => {
//    if (key === roleField) {
//       return "user";
//    }
//    if (typeof value === "string") {
//       return value.toLowerCase();
//    }
//    if (typeof value === "number") {
//       return "0" + value / 10;
//    }
//    return value;
// });
// console.log(parseData);

//===============================================

const url = new URL("https://www.example.com/path#howtodo");

// console.log(url);

const origin = new URL("https://www.example.com/path").origin;

// console.log(origin);

// const URL = {
//   href: 'https://www.example.com/path', //самий юрл для того щоб вставити повний шлях сайту
//   origin: 'https://www.example.com',//адреса самого серверу або до центрального файлу/домену
//   protocol: 'https:',//тип протоколу передачі данних: http , https, "mailto:user@gmail.com"
//   username: '',//ім'я користувача
//   password: '',//пароль з юрл для доступу до сервера
//   host: 'www.example.com',// ім'я домену  з портом
//   hostname: 'www.example.com',// тільки ім'я домену
//   port: '',//номер порта
//   pathname: '/path',//шлях до ресурсу до певного файлу або сторінки
//   search: '',//рядок параметрів після ?
//   searchParams: URLSearchParams {},//Це вбудована властивість, яка повертає спеціальний об’єкт,
// який надає зручні вбудовані функції для взаємодії з параметрами в URL-адресі
//   hash: '',//якір на ідентифікаторі певного тегу починається на #
// }
const url1 = new URL("https://admin:12345@example.com:8080/path");

// console.log(url1);

// URL {
//   href: 'https://admin:12345@example.com:8080/path',
//   origin: 'https://example.com:8080',
//   protocol: 'https:',
//   username: 'admin',
//   password: '12345',
//   host: 'example.com:8080',
//   hostname: 'example.com',
//   port: '8080',
//   pathname: '/path',
//   search: '',
//   searchParams: URLSearchParams {},
//   hash: ''
// }

const hello = new URL(
   "https://www.google.com/search?q=hello&rlz=1C1CHBD_ruUA986UA986&oq=hello&aqs=chrome.0.0i355i433i512j46i433i512l2j46i131i433i512j46i433i512j0i512j46i433i512j46i512j0i512l2.1605j0j7&sourceid=chrome&ie=UTF-8&lr=(-lang_ru)"
).searchParams;

console.log(hello);
// URLSearchParams {
//   'q' => 'hello',
//   'rlz' => '1C1CHBD_ruUA986UA986',
//   'oq' => 'hello',
//   'aqs' => 'chrome.0.0i355i433i512j46i433i512l2j46i131i433i512j46i433i512j0i512j46i433i512j46i512j0i512l2.1605j0j7',
//   'sourceid' => 'chrome',
//   'ie' => 'UTF-8',
//   'lr' => '(-lang_ru)' }
