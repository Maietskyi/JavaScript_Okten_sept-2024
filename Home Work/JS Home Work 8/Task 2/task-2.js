// #iz6emEsP2BA
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
//     Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

//  я пробував зробити за таким типом {id,title,monthDuration}, але логічно що мені ітерується кожен елемент масиву
//  перед тим як в об'єкт потрапляють всі ключі з об'єктів масиву coursesAndDurationArray
//  і виходить що мені id додається в масив але не приймає значення index
console.log(coursesAndDurationArray.map((index, object) => ({id:index,...object})));

// тому я пробував зробити наступним чином, але воно додає  в консоль не так {id,title,monthDuration}, а так {title,monthDuration,id}
// хоча коли розгортаю в консолі об'єкт - то структурується в стовпчик саме таки: id,title,monthDuration
console.log(coursesAndDurationArray.map((object, index) => ({...object, id:index})));