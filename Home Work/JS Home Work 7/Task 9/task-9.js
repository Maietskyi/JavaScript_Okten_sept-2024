// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter

Array.prototype.myForEach = function (callback) {
    const yourArray = this;
    for (const item of yourArray) {
        callback(item)
    }
};

['Misha', 22, 'Okten', 'Java Script'].myForEach((myFunction) => console.log(myFunction));