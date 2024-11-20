// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
//     Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.

const  cinderella = {
    name:'Anna',
    age:17,
    footSize:37,
    function (){
        console.log(`Функція працює`)
    }

}

// Я пробував робити ось так, але не знаю як це доробити
// function copy (objectUser){
//     for (const object of objectUser){
//         if (typeof object[key] === 'function'){
//
//         }
//     }
//     return Object.assign({}, objectUser);
// }
//
// let copyCinderella = copy(cinderella);
// console.log(copyCinderella);
// console.log(copyCinderella === cinderella);

// ось так - в консолі показує що функція в об'єкті є

function copy (objectUser){
    return Object.assign({}, objectUser);
}

console.log(cinderella);
cinderella.function();
let copyCinderella = copy(cinderella);
console.log(copyCinderella);
copyCinderella.function();
console.log(copyCinderella === cinderella);


// Ось тут я робив так як Сергій на відео, але все одно важкувата конструкція

// function copy2 (objectUser) {
//     if (objectUser){
//         let arrayFunction = [];
//         for (const key in objectUser) {
//             if (typeof objectUser[key] === 'function'){
//                 const copyFunction = objectUser[key].bind();
//                 arrayFunction.push({copyFunction, key});
//             }
//         }
//     const string = JSON.stringify(objectUser);
//     const parseToString = JSON.parse(string);
//         for (const item of arrayFunction) {
//             parseToString[item.key] = item.copyFunction;
//         }
//         return parseToString;
//     }
//     throw new Error("Error");
// }
//
// console.log(copy2(cinderella));