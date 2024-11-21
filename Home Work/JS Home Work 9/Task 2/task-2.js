
//     #OPLI89c9G
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи
// масиву (кожен в своєму li)

const Array = ['Main','Products','About us','Contacts'];

let ulCreat = document.createElement('ul');
ulCreat.classList.add('lisl-ul');
document.body.appendChild(ulCreat)

for (const string of Array) {
    let li = document.createElement('li');
    li.classList.add('lisl-ul')
    li.innerText = string;
    ulCreat.appendChild(li);
}
