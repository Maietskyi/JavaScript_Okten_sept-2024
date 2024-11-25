
// #RbQGnH5DuC
// В localStorage зберігаються масиви. Вам потрібно
// зробити функцію, які дістає потрібний вам масив з
// localStorage та додає в нього об'єкт
// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void


// Створюю функцію котра дістає потрібний масив
function addToLocalStorage (arrayName, objToAdd){
    let localStor = localStorage.getItem(arrayName)
    const arrayLocalStorage = JSON.parse(localStor)
    arrayLocalStorage.push(objToAdd)
    let jsonArrayLocalStorage = JSON.stringify(arrayLocalStorage);
    localStorage.setItem(arrayName, jsonArrayLocalStorage)
}
addToLocalStorage('pageView', {})



