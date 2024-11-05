//     #uwsz1RnTQJ1
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let numberOne = +prompt('Введіть перше число');
let numberTwo = +prompt('Введіть друге число');

if (numberOne > numberTwo) {
    console.log(numberOne)
}else if (numberOne === numberTwo) {
    console.log('Введені рівні числа - ', numberOne)
}else {
    console.log(numberTwo)
}