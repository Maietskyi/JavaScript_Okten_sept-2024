// =========================
//
//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись
// значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
// ------------------
//
//
//
//     створити три блоки з різним текстовим контентом. зробити так, щоб всі блоки мали висоту найбільшого з них.

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

for (const courses of coursesArray) {
    let divContainer = document.createElement('div')
    divContainer.classList.add('container')

    let h1 = document.createElement('h1')
    h1.classList.add('heading')
    h1.innerText = courses.title;

    let divDuration = document.createElement('div')
    divDuration.classList.add('duration')

    let monthDuration = document.createElement('h3')
    monthDuration.classList.add('month')
    monthDuration.innerText = courses.monthDuration;

    let hourDuration = document.createElement('h3')
    hourDuration.classList.add('hour')
    hourDuration.innerText = courses.hourDuration;

    divDuration.append(monthDuration, hourDuration);

    let modules = document.createElement('ul')
    modules.classList.add('modules')

    for (const item in courses) {
        if (item === 'modules') {
            for (const name of courses.modules){
                let li = document.createElement('li')
                li.innerText = name;
                modules.appendChild(li);
            }
        }
    }
    divContainer.append(h1, divDuration, modules);
    document.body.appendChild(divContainer);
}