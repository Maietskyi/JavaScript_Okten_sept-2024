// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.

const dataOutput = (array) => {
    for (const user of array){
        document.write(`<div>
                 <p>id: ${user.id}</p> 
                 <p>name: ${user.name}</p> 
                 <p>age: ${user.age}</p>
                        </div>`);
    }
}
dataOutput([
    {id:'maietskyi', name:'Mykhailo', age:26},
    {id:'vika', name:'Viktoria', age:20},
    {id:'roma', name:'Roman', age:22}
])

