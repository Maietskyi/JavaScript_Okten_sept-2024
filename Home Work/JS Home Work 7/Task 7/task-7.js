// #5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car {
    constructor(model, producer, graduationYear, maximumSpeed, enginVolume) {

        this.model = model;
        this.producer = producer;
        this.graduationYear = graduationYear;
        this.maximumSpeed = maximumSpeed;
        this.enginVolume = enginVolume;
        this.drive = function () {
            console.log(`їдемо зі швидкістю ${this.maximumSpeed} кілометрів на годину`)
        };
        this.info = function () {
            for (const key in this) {
                console.log(key, this[key])
            }
        };
        this.increaseMaxSpeed = function (newSpeed) {
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