document.querySelectorAll('.product').forEach(product => {
    const quantityValue = product.querySelector('.product__quantity-value');
    const decBtn = product.querySelector('.product__quantity-control_dec');
    const incBtn = product.querySelector('.product__quantity-control_inc');

    decBtn.addEventListener('click', () => {
        let currentCount = parseInt(quantityValue.textContent);
        if (currentCount > 1) {
            quantityValue.textContent = currentCount - 1;
        }
    });

    incBtn.addEventListener('click', () => {
        let currentCount = parseInt(quantityValue.textContent);
        quantityValue.textContent = currentCount + 1;
    });
});

document.querySelectorAll('.product__add').forEach(addButton => {
    addButton.addEventListener('click', () => {
        const productDiv = addButton.closest('.product');
        const productId = productDiv.getAttribute('data-id');
        const imgSrc = productDiv.querySelector('.product__image').getAttribute('src');
        const quantity = parseInt(productDiv.querySelector('.product__quantity-value').textContent);
        const cartContainer = document.querySelector('.cart__products');
        let existingProduct = cartContainer.querySelector(`.cart__product[data-id="${productId}"]`);

        if (existingProduct) {
            const countElem = existingProduct.querySelector('.cart__product-count');
            let currentCount = parseInt(countElem.textContent);
            countElem.textContent = currentCount + quantity;
        } else {
            const cartProduct = document.createElement('div');
            cartProduct.className = 'cart__product';
            cartProduct.setAttribute('data-id', productId);

            const img = document.createElement('img');
            img.className = 'cart__product-image';
            img.src = imgSrc;

            const countDiv = document.createElement('div');
            countDiv.className = 'cart__product-count';
            countDiv.textContent = quantity;

            cartProduct.appendChild(img);
            cartProduct.appendChild(countDiv);

            cartContainer.appendChild(cartProduct);
        }
    });
});