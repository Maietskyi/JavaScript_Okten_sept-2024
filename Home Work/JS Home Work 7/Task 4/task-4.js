// #nkMXISv
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

function Client (id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}
let clientsArray = [
    new Client(1,'Roman', 'Maietskyi', 'roman@gmail.com', '+380999999999', ['Хліб', 'Масло', 'Ковбаса']),
    new Client(2,'Misha', 'Maietskyi', 'misha@gmail.com', '+380888888888', ['Телефон', 'Зарядне']),
    new Client(3,'Andriy', 'Tkach', 'tkach@gmail.com', '+380998887766', ['Coca-cola', 'Віскі', 'Шоколад']),
    new Client(4,'Vika', 'Trach', 'vika-trach@gmail.com', '+380664449999', ['Цукерки', 'Чай', 'Печиво']),
    new Client(5,'Masha', 'Kozak', 'kozak@gmail.com', '+380778887777', ['Сир', 'Масло', 'Ковбаса', 'Чай', 'Цукор']),
    new Client(6,'Olia', 'Muzuka', 'muzuka@gmail.com', '+380885248891', ['Хліб', 'Шоколадне масло']),
    new Client(7,'Max', 'Kril', 'max-kril@gmail.com', '+380662316621', ['Кава', 'Цукор', 'Печиво', 'Сік', 'Мандарин']),
    new Client(8,'Anna', 'Petriv', 'petriv@gmail.com', '+380965874441', ['Чохол на телефон', 'батончик']),
    new Client(9,'Olesia', 'Skruta', 'skruta@gmail.com', '+380938854712', ['Pepsi']),
    new Client(10,'Oleg', 'Kord', 'kord@gmail.com', '+380665554422', ['Морозиво', 'Нагетси', 'Морква', 'Чіпси'])
]
console.log(clientsArray);