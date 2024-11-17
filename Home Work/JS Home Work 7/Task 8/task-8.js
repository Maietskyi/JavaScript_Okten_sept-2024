// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class PrinceFunction {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}

const сinderellas = [
    new cinderella('Anna', 17, 37),
    new cinderella('Maria', 19, 39),
    new cinderella('Sofia', 17, 37),
    new cinderella('Vika', 18, 36),
    new cinderella('Ivanna', 21, 37),
    new cinderella('Lilia', 22, 40),
    new cinderella('Tania', 18, 39),
    new cinderella('Ira', 17, 38),
    new cinderella('Kris', 19, 37),
    new cinderella('Daria', 16, 35),
]

const prince = new PrinceFunction('Misha', 21, 36)

for (const user of сinderellas) {
    if (user.footSize === prince.shoe) {
        console.log(`Принц знайшов туфельку попелюшки ${user.name}`)
    }}
