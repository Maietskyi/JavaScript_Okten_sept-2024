// #8Nmt60ZT
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let div = document.createElement('div')

div.classList.add('wrap')
div.classList.add('collapse')
div.classList.add('alpha')
div.classList.add('beta')
div.innerText = 'Довільний текст';
div.style.backgroundColor = 'silver';
div.style.color = 'green';
div.style.fontSize = '24px';

document.body.appendChild(div);

let divClone = div.cloneNode(true);
document.body.appendChild(divClone);