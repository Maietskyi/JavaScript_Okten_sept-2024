// #2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

function User (id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

// 1 варіант
const user1 = new User(1,'Roman', 'Maietskyi', 'roman@gmail.com', '+380999999999');
const user2 = new User(2,'Misha', 'Maietskyi', 'misha@gmail.com', '+380888888888');
const user3 = new User(3,'Andriy', 'Tkach', 'tkach@gmail.com', '+380998887766');
const user4 = new User(4,'Vika', 'Trach', 'vika-trach@gmail.com', '+380664449999');
const user5 = new User(5,'Masha', 'Kozak', 'kozak@gmail.com', '+380778887777');
const user6 = new User(6,'Olia', 'Muzuka', 'muzuka@gmail.com', '+380885248891');
const user7 = new User(7,'Max', 'Kril', 'max-kril@gmail.com', '+380662316621');
const user8 = new User(8,'Anna', 'Petriv', 'petriv@gmail.com', '+380965874441');
const user9 = new User(9,'Olesia', 'Skruta', 'skruta@gmail.com', '+380938854712');
const user10 = new User(10,'Oleg', 'Kord', 'kord@gmail.com', '+380665554422');
const usersArray =[user1,user2,user3,user4,user5,user6,user7,user8,user9,user10];
// console.log(usersArray);

function filterFunction (user) {
    return user.id % 2 === 0;
}
const filterUsers = usersArray.filter(filterFunction);
console.log(filterUsers);

// 2 варіант
let usersArray1 = [
    new User(1,'Roman', 'Maietskyi', 'roman@gmail.com', '+380999999999'),
    new User(2,'Misha', 'Maietskyi', 'misha@gmail.com', '+380888888888'),
    new User(3,'Andriy', 'Tkach', 'tkach@gmail.com', '+380998887766'),
    new User(4,'Vika', 'Trach', 'vika-trach@gmail.com', '+380664449999'),
    new User(5,'Masha', 'Kozak', 'kozak@gmail.com', '+380778887777'),
    new User(6,'Olia', 'Muzuka', 'muzuka@gmail.com', '+380885248891'),
    new User(7,'Max', 'Kril', 'max-kril@gmail.com', '+380662316621'),
    new User(8,'Anna', 'Petriv', 'petriv@gmail.com', '+380965874441'),
    new User(9,'Olesia', 'Skruta', 'skruta@gmail.com', '+380938854712'),
    new User(10,'Oleg', 'Kord', 'kord@gmail.com', '+380665554422')
]
// console.log(usersArray1);

const filterUsers1 = usersArray1.filter((user) => user.id % 2 === 0);

console.log(filterUsers1);
