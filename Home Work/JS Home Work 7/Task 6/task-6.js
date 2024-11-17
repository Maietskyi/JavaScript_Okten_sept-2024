// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями
// модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car (model, producer, graduationYear, maximumSpeed, enginVolume) {
        this.model = model;
        this.producer = producer;
        this.graduationYear = graduationYear;
        this.maximumSpeed = maximumSpeed;
        this.enginVolume = enginVolume;
        this.drive = function () {
            console.log(`їдемо зі швидкістю ${this.maximumSpeed} кілометрів на годину`)};
        this.info = function () {
            for (const key in this){
                console.log(key, this[key])
            }};
        this.increaseMaxSpeed = function (newSpeed){
            if (newSpeed > 0)
                this.maximumSpeed += newSpeed;
            };
        this.changeYear = function (newValue) {
            if (newValue > 1900)
            this.graduationYear = newValue;
        };
        this.addDriver = function (driver) {
            if (driver)
                this.addDriver = driver
        }
}

let car = new Car('Passat B7', 'Wolkswagen Group', 2011, 190, 1.6)
console.log(car);
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
car.drive();
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
car.info();
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
car.increaseMaxSpeed(20);
console.log(car);
// -- changeYear (newValue) - змінює рік випуску на значення newValue
car.changeYear(2020);
console.log(car);
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
car.addDriver = ({name: 'Misha', drivingExperience: 7});
console.log(car);


//==========================================================================================================
// я не розумію як достукатись в такому прикладі

// let arrayCars = [
// new Car('Passat B7', 'Wolkswagen Group', 2011, 190, 1.6),
// new Car('S350', 'Mercedes Bens', 2017, 240, 2.2),
// new Car('Passat B5', 'Wolkswagen Group', 2002, 190, 1.9),
// new Car('Golf 4', 'Wolkswagen Group', 2004, 170, 1,4),
// new Car('Ford Mondeo', 'Ford Motor Company', 2018, 280, 2.0)
// ]
//
// console.log(arrayCars);
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// arrayCars.drive();
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// arrayCars.info();
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// arrayCars.increaseMaxSpeed(20);
// console.log(arrayCars);
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// arrayCars.changeYear(2020);
// console.log(arrayCars);
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// arrayCars.addDriver = ({name: 'Misha', drivingExperience: 7});
// console.log(arrayCars);
