// #jeBqHV525U5
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const courses of coursesAndDurationArray) {
    let divCreat = document.createElement('div')
    let h4 = document.createElement('h4')
    h4.innerText = courses.title;
    let p = document.createElement('p')
    p.innerText = 'Тривалість курсу' + ' '+ courses.monthDuration + ' ' + 'місяців';
    divCreat.append(h4, p);
    document.body.appendChild(divCreat);
    }






// 2 варіант
for (const course of coursesAndDurationArray) {
    let divCreat = document.createElement('div')
    divCreat.innerText = `${course.title} тривалість ${course.monthDuration}`;
    document.body.appendChild(divCreat);
}

