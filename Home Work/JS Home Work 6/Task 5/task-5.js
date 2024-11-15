//     #bfoJuse4ZzP
// - Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToArray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// 1 варіант
let str = 'Ревуть воли як ясла повні';
let stringToArray = (str) => {
    const splitToArray =  str.split(' ');
    console.log(splitToArray);
};
stringToArray(str);

// 2 варіант
function stringToArray1 (str){
    const splitToArray1 =  str.split(' ');
    return splitToArray1;
}

console.log(stringToArray1('Ревуть воли як ясла повні'))
