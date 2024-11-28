
//     #bq1zkx7WP
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається


let value = document.getElementById('value')

// створення масиву в який записуватимуться сесії
let pageView = [];
// якщо такі сесії вже були - і є записи в localStorage
if (localStorage.getItem('pageView')){
    // перетворюємо на масив і дописуємо
    pageView = JSON.parse(localStorage.getItem('pageView'))
}


value.innerText = `Кількість перезавантажень ${number}`;
// Додаю поточну дату відвідування сторінки
pageView.push(new Date());

// записую значення в масив
localStorage.setItem('pageView', JSON.stringify(pageView))
let number = +localStorage.getItem('number')
number += 10;
localStorage.setItem('number', number)

// якщо такі сесії вже були - і є записи в localStorage
if (localStorage.getItem('pageView')){
    // перетворюємо на масив і дописуємо
    pageView = JSON.parse(localStorage.getItem('pageView'))
}

// Це не мій код
// window.onload = function(){
//     let numberBlock  = document.getElementById('numberBlock');
//     let datePage = Date.now();
//
//     let currentNumber = parseInt(localStorage.getItem('reloadPage')) || 100;
//     let currentDate =  parseInt(localStorage.getItem('currentDate')) || 0;
//
//     if(datePage - currentDate >= 10000){
//         currentNumber += 10;
//         localStorage.setItem('reloadPage', currentNumber);
//         localStorage.setItem('currentDate', datePage);
//     }
//     numberBlock.textContent = currentNumber;
//