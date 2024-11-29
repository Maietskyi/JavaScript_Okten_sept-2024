// #whXxOBlYS0H
// - взяти https://dummyjson.com/docs/recipes та вивести
// інформацію про всі рецепти. Інгредієнти повинні бути
// список під час відображення.

fetch('https://dummyjson.com/recipes')
    .then((res) => res.json())
    .then(item => {
        let {recipes} = item;
        let divContainer = document.createElement('div');
        divContainer.classList.add('divContainer')
        console.log(recipes)
        document.body.append(divContainer)

        for (const recipe of recipes) {
            let listDishes = document.createElement('ul')
            listDishes.classList.add('listDishes')
            console.log(recipe)

            let name = document.createElement('p')
            let image = document.createElement('img')

            name.innerText = `${recipe.name}`
            image.src = `${recipe.image}`
            listDishes.append(name, image)

            let ulIngredient = document.createElement('ul')
            ulIngredient.innerText = `Ingredient:`
            for (const ingredient of recipe.ingredients) {
                let li = document.createElement('li')
                li.innerText = `${ingredient}`
                ulIngredient.append(li)
                listDishes.append(ulIngredient)
            }

            let ulInstruction = document.createElement('ul')
            ulInstruction.innerText = `Ingredient:`
            for (const ingredient of recipe.instructions) {
                let li = document.createElement('li')
                li.innerText = `${ingredient}`
                ulInstruction.append(li)
                listDishes.append(ulInstruction)
            }

            let caloriesPerServing = document.createElement('p')
            let cookTimeMinutes = document.createElement('p')
            let cuisine = document.createElement('p')
            let difficulty = document.createElement('p')
            let id = document.createElement('p')
            let mealType = document.createElement('p')
            let prepTimeMinutes = document.createElement('p')
            let rating = document.createElement('p')
            let reviewCount = document.createElement('p')
            let servings = document.createElement('p')
            let tags = document.createElement('p')
            let userId = document.createElement('p')

            caloriesPerServing.innerText = `${recipe.caloriesPerServing}`
            cookTimeMinutes.innerText = `${recipe.cookTimeMinutes}`
            cuisine.innerText = `${recipe.cuisine}`
            difficulty.innerText = `${recipe.difficulty}`
            id.innerText = `${recipe.id}`
            mealType.innerText = `${recipe.mealType}`
            prepTimeMinutes.innerText = `${recipe.prepTimeMinutes}`
            rating.innerText = `${recipe.rating}`
            reviewCount.innerText = `${recipe.reviewCount}`
            servings.innerText = `${recipe.servings}`
            tags.innerText = `Tags: ${recipe.tags}`
            userId.innerText = `User Id: ${recipe.userId}`

            listDishes.append(caloriesPerServing, cookTimeMinutes, cuisine, difficulty,
                id, mealType, prepTimeMinutes, rating, reviewCount, servings, tags, userId)
            divContainer.appendChild(listDishes)
        }


    })









