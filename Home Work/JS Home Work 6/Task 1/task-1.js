// #dFeorS3m7u
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let string1 = 'hello world';
console.log(string1.length);
let string2 = 'lorem ipsum';
console.log(string2.length);
let string3 = 'javascript is cool';
console.log(string3.length);

// 2 варіант
const arrayStrings = [string1,string2,string3]
for (const string of arrayStrings){
    console.log(string.length)
}

// 3 варіант з функцією - не впевнений що така конструкція вірна

const stringsArray = ['hello world', 'lorem ipsum', 'javascript is cool'];
let stringLength = () => {
    for (const str of stringsArray){
        console.log(str.length)
    }
}

stringLength (stringsArray);

