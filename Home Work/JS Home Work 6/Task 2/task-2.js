// #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let string1 = 'hello world';
let string2 = 'lorem ipsum';
let string3 = 'javascript is cool';
console.log(string1.toUpperCase());
console.log(string2.toUpperCase());
console.log(string3.toUpperCase());

// 2 варіант
let stringToUpperCase = (arg) => console.log(arg.toUpperCase());
stringToUpperCase (string1);
stringToUpperCase (string2);
stringToUpperCase (string3);

// 3 варіант
const arrayStrings = [string1,string2,string3]
for (const string of arrayStrings){
    console.log(string.toUpperCase())
}

// 4 варіант з функцією - не впевнений що така конструкція вірна

const stringsArray = ['hello world', 'lorem ipsum', 'javascript is cool'];
let stringLength = () => {
    for (const str of stringsArray){
        console.log(str.toUpperCase())
    }
}

stringLength (stringsArray);