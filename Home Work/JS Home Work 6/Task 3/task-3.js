// #ClDsAm7xba7
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let string1 = 'HELLO WORLD';
let string2 = 'LOREM IPSUM';
let string3 = 'JAVASCRIPT IS COOL';
console.log(string1.toLowerCase());
console.log(string2.toLowerCase());
console.log(string3.toLowerCase());

// 2 варіант
let stringLoLowerCase = (arg) => console.log(arg.toLowerCase());
stringLoLowerCase (string1);
stringLoLowerCase (string2);
stringLoLowerCase (string3);

// 3 варіант
const arrayStrings = [string1,string2,string3]
for (const string of arrayStrings){
    console.log(string.toLowerCase())
}

// 4 варіант з функцією - не впевнений що така конструкція вірна
const stringsArray = ['hello world', 'lorem ipsum', 'javascript is cool'];
let stringLength = () => {
    for (const str of stringsArray){
        console.log(str.toLowerCase())
    }
}

stringLength (stringsArray);