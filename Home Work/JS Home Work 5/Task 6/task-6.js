// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його
// через document.write. Текст li задати через аргумент всім однаковий

const displayText = (textLi) => {
    document.write(`<ul>
        <li>${textLi}</li>
        <li>${textLi}</li>
        <li>${textLi}</li>
    </ul>`);
}

displayText('Okten school');