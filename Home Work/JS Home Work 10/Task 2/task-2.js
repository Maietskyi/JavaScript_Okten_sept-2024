//         #j693ca8
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік
//     чи менше він ніж 18, та повідомити про це користувача

const ageVerification = document.forms.ageVerification;
let information = document.getElementById('information');


ageVerification.addEventListener('submit', function (event) {
    event.preventDefault();
    const ageValue = ageVerification.age.value;
    if (ageValue<18){
        let resoult = 18 - ageValue;
        information.innerText = `Вибачте, контент не доступний. Поверніться через ${resoult} років`;
    } else {
        information.innerText = `Ласкаво прошу, 
        ви пройшли перевірку`;
    }
});






