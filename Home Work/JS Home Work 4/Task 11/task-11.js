// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sum(arr) {
    let result = 0;
   for (const number of arr){
       result = result + number;
   }
    return result;
}

document.write(sum([1,2,10]));