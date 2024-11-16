//     #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
const suits =['spade', 'diamond','heart', 'club'];
const values = ['6', '7', '8', '9', '10', 'ace','jack','queen','king'];

const cards =[];
for (const suit of suits){
    for (const value of values) {
        const card= {cardSuit: suit, value: value};
        if (suit === 'heart' || suit === 'diamond') {
            card.color = 'red';
        } else {
            card.color = 'black';
        }
        cards.push(card);
    }
}
console.log(cards);

// Коли я роблю так як Сергій розв'язує це дз, мені не виводить в консоль

// cards.reduce((previousValue, card) => {
//     switch (card.cardSuit) {
//         case 'spade':
//             previousValue.spades.push(card);
//             break;
//         case 'diamond':
//             previousValue.diamonds.push(card);
//             break;
//         case 'heart':
//             previousValue.hearts.push(card);
//             break;
//         case 'club':
//             previousValue.clubs.push(card);
//             break;
//     }
//     return previousValue;
// }, {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// });
//
// console.log(reduce);

// я спробував зробити ось так і наче працює
// Але не можу зрозуміти чому не працює так як в Сергія

const resultSorting = cards.reduce((previousValue, card) => {
    switch (card.cardSuit) {
        case 'spade':
            previousValue.spades.push(card);
            break;
        case 'diamond':
            previousValue.diamonds.push(card);
            break;
        case 'heart':
            previousValue.hearts.push(card);
            break;
        case 'club':
            previousValue.clubs.push(card);
            break;
    }
    return previousValue;
}, {
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
});

console.log(resultSorting);