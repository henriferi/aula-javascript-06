let txt = "abcdefghijklm";
console.log(txt.lastIndexOf("h"));

let txt2 = "Posso comer bananas o dia todo";
console.log(txt2.slice(11, 19));

let txt3 = "Olá, Mundo";
console.log(txt3.replace("Olá","Bem vindo"));

let txt4 = "Olá, Mundo";
console.log(txt4.toUpperCase());

let txt5 = "Olá, Mundo";
console.log(txt5.toLowerCase());

let txt6 = "Posso comer bananas o dia todo";
console.log(txt6.length);

let str1 = "Hello ";
let str2 = "World!";
let conc = str1.concat(str2);
console.log(conc);

const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
console.log(fruits.sort());

const fruits2 = ["Banana", "Orange", "Apple", "Kiwi"];
const novoFruits = fruits2.splice(1,2)
console.log(novoFruits);

const fruits3 = ["Banana", "Orange", "Apple"];
fruits3.splice(3,3, "Uva", "Caju", "Kiwi");
console.log(fruits3);

const fruits4 = ["Banana", "Orange", "Apple"];
fruits4.unshift("Pera", "Manga");
fruits4.pop();
console.log(fruits4);



