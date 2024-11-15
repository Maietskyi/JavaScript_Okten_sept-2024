
//     #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }

const suits =['spade', 'diamond','heart', 'clubs'];
const values = ['6', '7', '8', '9', '10', 'ace','jack','queen','king'];

const cards =[];
for (const suit of suits){
    for (const value of values) {
        const card= {cardSuit : suit,value : value};
        if (suit === 'heart' || suit === 'diamond'){
            card.color = 'red';
        } else{
            card.color = 'black';
        }
        cards.push(card);
    }
}
console.log(cards);

// - знайти піковий туз
console.log(cards.find(card => card.value === 'ace' && card.cardSuit === 'spade'));
// - всі шістки
console.log(cards.filter(card => card.value === '6'));
// - всі червоні карти
console.log(cards.filter(card => card.color === 'red'));
// - всі буби
console.log(cards.filter(card => card.cardSuit === 'diamond'));
// - всі трефи від 9 та більше
console.log(cards.filter(card => card.cardSuit === 'clubs' && (
    card.value !== '6' || card.value !== '7' || card.value !== '8' || card.value !== '9')));