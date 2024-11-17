// #pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

function User (id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let usersArray = [
    new User(2,'Misha', 'Maietskyi', 'misha@gmail.com', '+380888888888'),
    new User(1,'Roman', 'Maietskyi', 'roman@gmail.com', '+380999999999'),
    new User(10,'Oleg', 'Kord', 'kord@gmail.com', '+380665554422'),
    new User(4,'Vika', 'Trach', 'vika-trach@gmail.com', '+380664449999'),
    new User(5,'Masha', 'Kozak', 'kozak@gmail.com', '+380778887777'),
    new User(3,'Andriy', 'Tkach', 'tkach@gmail.com', '+380998887766'),
    new User(8,'Anna', 'Petriv', 'petriv@gmail.com', '+380965874441'),
    new User(7,'Max', 'Kril', 'max-kril@gmail.com', '+380662316621'),
    new User(9,'Olesia', 'Skruta', 'skruta@gmail.com', '+380938854712'),
    new User(6,'Olia', 'Muzuka', 'muzuka@gmail.com', '+380885248891')
]
// не можу одразу писати інлайнову конструкцію, тому розписую весь функціонал а потім скорочую)
// function sortUsersFunction (user1, user2) {
//     return user1.id - user2.id;
// }
// const sortUsers = (usersArray.sort(sortUsersFunction));
// console.log(sortUsers);

const sortUsers = (usersArray.sort((user1, user2) => user1.id - user2.id));

console.log(sortUsers);