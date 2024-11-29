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
        // console.log(recipes)
        document.body.append(divContainer)

        for (const recipe of recipes) {
            let listDishes = document.createElement('ul')
            listDishes.classList.add('listDishes')
            // console.log(recipe)

            let name = document.createElement('h2')
            let image = document.createElement('img')

            name.innerText = `${recipe.name}`
            image.src = `${recipe.image}`
            listDishes.append(name, image)

            let ulIngredient = document.createElement('ul')
            ulIngredient.innerText = `Ingredients:`
            ulIngredient.classList.add('ulIngredient')
            for (const ingredient of recipe.ingredients) {
                let li = document.createElement('li')
                li.innerText = `${ingredient}`
                ulIngredient.append(li)
                listDishes.append(ulIngredient)
            }

            let olInstruction = document.createElement('ol')
            olInstruction.innerText = `Сooking instructions:`
            olInstruction.classList.add('olInstruction')
            for (const ingredient of recipe.instructions) {
                let li = document.createElement('li')
                li.innerText = `${ingredient}`
                olInstruction.append(li)
                listDishes.append(olInstruction)
            }

            let divParameters = document.createElement('div');
            divParameters.classList.add('divParameters')
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
            let userId = document.createElement('p')

            caloriesPerServing.innerText = `Calories Per Serving: ${recipe.caloriesPerServing}`
            cookTimeMinutes.innerText = `Cook Time Minutes: ${recipe.cookTimeMinutes}`
            cuisine.innerText = `Cuisine: ${recipe.cuisine}`
            difficulty.innerText = `Difficulty: ${recipe.difficulty}`
            id.innerText = `Id: ${recipe.id}`
            prepTimeMinutes.innerText = `Prep Time Minutes: ${recipe.prepTimeMinutes}`
            rating.innerText = `Rating: ${recipe.rating}`
            reviewCount.innerText = `Review Count: ${recipe.reviewCount}`
            servings.innerText = `Servings: ${recipe.servings}`
            userId.innerText = `User Id: ${recipe.userId}`


            divParameters.append(caloriesPerServing, cookTimeMinutes, cuisine, difficulty,
                id, prepTimeMinutes, rating, reviewCount, servings, userId)
            listDishes.append(divParameters)

            mealType.innerText = `Meal Type: ${recipe.mealType}`
            let ulMealType = document.createElement('ul')
            ulMealType.innerText = `Meal Type:`
            ulMealType.classList.add('ulMealType')
            for (const meal of recipe.mealType) {
                let li = document.createElement('li')
                li.innerText = `${meal}`
                ulMealType.append(li)
                listDishes.append(ulMealType)
            }

            let ulTags = document.createElement('ul')
            ulTags.innerText = `Tags:`
            ulTags.classList.add('ulTags')
            for (const tag of recipe.tags) {
                let li = document.createElement('li')
                li.innerText = `${tag}`
                ulTags.append(li)
                listDishes.append(ulTags)
            }
            divContainer.appendChild(listDishes)
        }
    })









