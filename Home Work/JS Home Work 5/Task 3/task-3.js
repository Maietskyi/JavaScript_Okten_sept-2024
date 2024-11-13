// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// Площа бічної сторони = 2пRH
let lateralArea = (radius,height) => 2*Math.PI*radius*height;

//Площа основи = π(R*R)
let circleArea = (radius) => Math.PI*(radius*radius);

// Повна площа циліндра = Площа бічної сторони + 2 * Площа основи
// тобто площа циліндра = 2пRH + 2*π(R*R)
let cylinderArea = (radius,height) => lateralArea(radius,height) + 2 * circleArea(radius);

console.log(cylinderArea(12,5));
