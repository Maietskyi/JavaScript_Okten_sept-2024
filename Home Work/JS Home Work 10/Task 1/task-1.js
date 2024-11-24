// #sH8c4er
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript,
// зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

const buttonDisappearance = document.getElementById('disappearance');

buttonDisappearance.onclick = function (){
    document.getElementById('text').style.display='none';
    // document.getElementById('text').remove();
}

