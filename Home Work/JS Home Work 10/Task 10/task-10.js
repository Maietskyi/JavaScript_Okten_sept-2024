// #NKB0tgWIK1G
// ***PAGINATION
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

let arrayView = document.getElementById('arrayView')
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let array = []
for (let i = 0; i < 100; i++) {
    array.push({id: i + 1, name: 'misha' + (i + 1)})
}

console.log(array)

let counter = 0;
let limit = 10;
next.addEventListener('click', function () {
    arrayView.innerText = '';
    for (let i = counter; i < limit; i++) {
        const p = document.createElement('p')
        p.innerText = array[i].name;
        arrayView.appendChild(p);
    }
    counter += 10;
    limit += 10;
});

prev.addEventListener('click', function () {
    arrayView.innerText = '';
    for (let i = counter; i < limit; i++) {
        const p = document.createElement('p')
        p.innerText = array[i].name;
        arrayView.appendChild(p);
    }
    counter -= 10;
    limit -= 10;
});



