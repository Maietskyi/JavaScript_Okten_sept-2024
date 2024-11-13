//     #pghbnSB
// - створити функцію яка повертає найменьше число з масиву

// Перший варіант
const minNumber = (array) => console.log(Math.min(...array));

minNumber([2,5,8,2,4,3,1,5]);

// Другий варіант
const minNumber2 = (arrays) => {
    let min = arrays[0];
    for (const number of arrays){
        if (number < min) {
            min = number
        }
    }
    return min;
}

console.log(minNumber2([6,3,5,8,9,4,3,3,5]));
