// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за
// допомоги map  перетворити всі об'єкти в масиві на стрінгові.

const numberArray = [10,8,-7,55,987,-1011,0,1050,0];

let numberToString = numberArray.map(number => number + '');
console.log(numberToString);