
// #Jg0gPO00
// створити конвертор ваги з кг в фунти. данні
// заповнюються через інпут. При введенні даних
// обрахунок стається миттєво, без натискань
// додаткових кнопок


const enteredKilograms = document.getElementById('enteredKilograms');
let removingPounds = document.getElementById('removingPounds');


enteredKilograms.addEventListener('input', function () {
    let result = +enteredKilograms.value * 2.20462;
    removingPounds.innerText = `${enteredKilograms.value} кг = ${result} фунт`;
});