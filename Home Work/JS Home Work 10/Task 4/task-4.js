
// #2VaLt4vDczH
// є сторінка, на якій є блок, я кому знаходиьтся цифра.
// написати код, який при кожному перезавантажені
// сторінки буде додавати до неї +1


let value = document.getElementById('value')
let number = +localStorage.getItem('number')
number += 1;
localStorage.setItem('number', number)

value.innerText = `Кількість перезавантажень ${number}`;

