// #HmvAfRQM
// - взяти https://dummyjson.com/docs/carts та вивести
// інформацію про всі корзини. Відобразити всі поля
// кожної корзини.


fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then(baskets => {
            let {carts} = baskets;
            let divContainer = document.createElement('div');
            divContainer.classList.add('divContainer')
        document.body.append(divContainer)

            for (const cart of carts) {
                let cartBox = document.createElement('div')
                cartBox.classList.add('cartBox')

                let id = document.createElement('h3');
                let userId = document.createElement('h4');
                let totalProducts = document.createElement('p');
                let totalQuantity = document.createElement('p');
                let total = document.createElement('p');
                let discountedTotal = document.createElement('p');
                id.innerText = `Baskets Id: ${cart.id}`;
                userId.innerText = `User Id: ${cart.userId}`;
                totalProducts.innerText = `Total Products: ${cart.totalProducts}`;
                totalQuantity.innerText = `Total Quantity: ${cart.totalQuantity}`;
                total.innerText = `Total: $ ${cart.total}`;
                discountedTotal.innerText = `Discounted Total: $ ${cart.discountedTotal}`;

                cartBox.append(id, userId, totalProducts, totalQuantity, total, discountedTotal);
                // console.log(cart)
                divContainer.append(cartBox)

                for (const product of cart.products) {
                    let productBox = document.createElement('div')
                    productBox.classList.add('productBox')

                    let id = document.createElement('h3')
                    let title = document.createElement('h4')
                    let thumbnail = document.createElement('img')
                    let quantity = document.createElement('p')
                    let price = document.createElement('p')
                    let total = document.createElement('p')
                    let discountPercentage = document.createElement('p')
                    let discountedTotal = document.createElement('p')
                    id.innerText = `Product Id: ${product.id}`;
                    title.innerText = `Title: ${product.title}`;
                    thumbnail.src = `${product.thumbnail}`;
                    quantity.innerText = `Quantity: ${product.quantity}`;
                    price.innerText = `Price: $ ${product.price}`;
                    total.innerText = `Total: $ ${product.total}`;
                    discountPercentage.innerText = `Discount Percentage: ${product.discountPercentage}`;
                    discountedTotal.innerText = `Discounted Total: $ ${product.discountedTotal}`;

                    productBox.append(id, title, thumbnail, quantity, price, total, discountPercentage, discountedTotal)
                    cartBox.appendChild(productBox);
                    // console.log(product)
                }

            }
        }
    )


