
// #ymAmN2xJ
// Стоврити форму з трьома полями для name,sruname,age
// та кнопкою. При натисканні на кнопку зчитати данні
// з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку,
// під формою з'явився блок з вашим об'єктом

const dataForm = document.forms.dataForm;
let information = document.getElementById('information');


dataForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const nameValue = dataForm.name.value;
    const surnameValue = dataForm.surname.value;
    const ageValue = dataForm.age.value;
    let object = {nameValue, surnameValue, ageValue};
    information.innerText = `Ім'я: ${object.nameValue} Прізвище: ${object.surnameValue} Вік: ${object.ageValue}`;
});

