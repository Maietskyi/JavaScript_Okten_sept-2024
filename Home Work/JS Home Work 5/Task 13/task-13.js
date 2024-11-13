// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400

const exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    let nameCurrency;
    for (const name of currencyValues) {
        if (name.currency === exchangeCurrency) {
            nameCurrency = name;
        }
    }
    return sumUAH / nameCurrency.value;
}

console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'));
console.log(exchange(20000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'EUR'));