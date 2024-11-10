// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.

function dataOutput (array) {
    for (const user of array){
        document.write(`
             <div>
                <p>${user.id} ${user.name} ${user.age}</p>
             </div>
                    `);
    }
}
dataOutput([
    {
        id:'maietskyi',
        name:'Mykhailo',
        age:26
    },
    {
        id:'vika',
        name:'Viktoria',
        age:20
    }
])

