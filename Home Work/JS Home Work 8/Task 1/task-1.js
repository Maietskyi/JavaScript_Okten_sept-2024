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
console.log(cinderella);
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

let copyCinderella = copy(cinderella);
console.log(copyCinderella);
console.log(copyCinderella === cinderella);












//
// function copy2 (objectUser){
//     let string = JSON.stringify(objectUse);
//     return JSON.stringify(string);
// }

