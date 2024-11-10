// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r

// 1 варіант
function circleArea (circleRadius){
    const result = 3.14*(circleRadius*circleRadius);
    console.log(result);
    return result;
}

circleArea (12);

// 2 варіант
function circleArea2 (circleRadius){
    return Math.PI*(circleRadius*circleRadius);
}

console.log(circleArea2 (12));