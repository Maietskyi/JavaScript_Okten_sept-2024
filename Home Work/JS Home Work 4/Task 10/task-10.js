//     #pghbnSB
// - створити функцію яка повертає найменьше число з масиву

// Перший варіант
function minNumber (array) {
    return Math.min(...array);
}

console.log(minNumber([2,5,8,2,4,3,1,5]));

// Другий варіант
function minNumber2 (arrays) {
    let min = arrays[0];
    for (const number of arrays){
        if (number < min) {
            min = number
        }
    }
    return min;
}

console.log(minNumber2([6,3,5,8,9,4,3,3,5]));
