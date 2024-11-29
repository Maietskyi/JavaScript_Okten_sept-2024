
//     #kUSgFqWY
// Створити 3 інпута та кнопку. Один визначає кількість
// рядків, другий - кількість ячеєк, третій вміст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується
//     і формується табличка, з відповідним вмістом.

const dataTable = document.forms['dataTable']
const formTable = document.getElementById('formTable')


dataTable.onsubmit = function (event){
    formTable.innerText = '';
    event.preventDefault()
    const numberLinesValue = +dataTable.numberLines.value;
    const numberСellsValue = +dataTable.numberСells.value;
    const contentsValue = dataTable.contents.value;
    console.log(numberLinesValue, numberСellsValue, contentsValue)

    for (let i = 0; i < numberLinesValue; i++) {
        const tr = document.createElement('tr');
        for (let y = 0; y < numberСellsValue; y++){
            const td = document.createElement('td');
            td.innerText = contentsValue;
            tr.appendChild(td)
        }
        formTable.appendChild(tr)
    }
}




