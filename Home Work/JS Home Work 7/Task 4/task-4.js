// #nkMXISv
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

function Client (id, name, surname, email, phone, product) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = product;
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

// з доповненням

function Client1 (id, name, surname, email, phone, ...products) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = products;
}

function Product (title, price){
    this.title = title;
    this.price = price;
}

let clientsArray1 = [
    new Client1(1,'Roman', 'Maietskyi', 'roman@gmail.com', '+380999999999',
        new Product('Хліб', '32.50'),
        new Product('Масло', '96.50'),
        new Product('Ковбаса', '320,00')),
    new Client1(2,'Misha', 'Maietskyi', 'misha@gmail.com', '+380888888888',
        new Product('Телефон', '51000,00'),
        new Product( 'Зарядне', '6345.50)')),
    new Client1(3,'Andriy', 'Tkach', 'tkach@gmail.com', '+380998887766',
        new Product('Coca-cola', '53.40'),
        new Product('Віскі', '876.25'),
        new Product('Шоколад', '117.80')),
    new Client1(4,'Vika', 'Trach', 'vika-trach@gmail.com', '+380664449999',
        new Product('Цукерки', '189.64'),
        new Product('Чай', '120.00'),
        new Product('Печиво', '258.00')),
    new Client1(5,'Masha', 'Kozak', 'kozak@gmail.com', '+380778887777',
        new Product('Сир', '475.00'),
        new Product('Масло', '96.50'),
        new Product('Ковбаса', '280.00'),
        new Product('Чай', '87.90'),
        new Product('Цукор', '80.50')),
    new Client1(6,'Olia', 'Muzuka', 'muzuka@gmail.com', '+380885248891',
        new Product('Хліб', '28.00'),
        new Product('Шоколадне масло', '530.00')),
    new Client1(7,'Max', 'Kril', 'max-kril@gmail.com', '+380662316621',
        new Product('Кава', '210.00'),
        new Product('Цукор', '121.00'),
        new Product('Печиво', '132.00'),
        new Product('Сік', '84.40'),
        new Product('Мандарин', '128.00')),
    new Client1(8,'Anna', 'Petriv', 'petriv@gmail.com', '+380965874441',
        new Product('Чохол на телефон', '600.00'),
        new Product('Батончик', '56.80')),
    new Client1(9,'Olesia', 'Skruta', 'skruta@gmail.com', '+380938854712',
        new Product('Pepsi', '61.90')),
    new Client1(10,'Oleg', 'Kord', 'kord@gmail.com', '+380665554422',
        new Product('Морозиво', '367.90'),
        new Product('Нагетси', '184.90'),
        new Product('Морква', '24.50'),
        new Product('Чіпси', '76.50'))
];
console.log(clientsArray1);