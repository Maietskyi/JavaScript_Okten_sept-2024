
// #LhSfdhM3
// Є сторінка index.html (назва довільна), при
// відвідуванні якої в локальне сховще, в масив
// sessionsList зберігається інформація про дату
// та час відвідування сторінки. Є  сторінка
// sessionsListPage.html (назва довільна), при
// відвідуванні якої потрібно відмалювати всю інформацію
// про відвідування сторінки index.html. Інфу НЕ виводити
// в консоль, а малювати в DOM


// створення масиву в який записуватимуться сесії
let pageView = [];

// якщо такі сесії вже були - і є записи в localStorage
if (localStorage.getItem('pageView')){
    // перетворюємо на масив і дописуємо
    pageView = JSON.parse(localStorage.getItem('pageView'))
}
// Додаю поточну дату відвідування сторінки
pageView.push(new Date());
// записую значення в масив
localStorage.setItem('pageView', JSON.stringify(pageView))