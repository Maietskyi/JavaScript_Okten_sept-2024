// #0Kxco1edSN
// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write

const displayText = (textLi,n) => {
    document.write('<ul>');
    for (let i = 0; i<=n; i++){
        document.write(`<li>${textLi}</li>`);
    }
    document.write('</ul>');}

displayText('Okten school',5);