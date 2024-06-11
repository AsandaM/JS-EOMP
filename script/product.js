// Product constructor function
function Product(name, image, price, description) {
    this.name = name;
    this.image = image;
    this.price = price;
    this.description = description;
}

// Create new products
let product1 = new Product('Gold Bead Butterfly Bracelet', 'https://asandam.github.io/images/bracelet.jpg', 119.99, 'Pair this gold bead and butterfly motif bracelet with a fine chain for an on-tren look.');
let product2 = new Product('Product 2', 'https://asandam.github.io/images/bracelet2.jpg', 29.99, 'This is product 2');
let product3 = new Product('Product 3', 'https://asandam.github.io/images/combo.jpg', 39.99, 'This is product 3');
let product4 = new Product('Product 3', 'https://asandam.github.io/images/necklace.jpg', 39.99, 'This is product 3');
let product5 = new Product('Product 3', 'https://asandam.github.io/images/combo3.jpg', 39.99, 'This is product 3');
let product6 = new Product('Product 3', 'https://asandam.github.io/images/earings5.jpg', 39.99, 'This is product 3');
let product7 = new Product('Product 3', 'https://asandam.github.io/images/necklace4.png', 39.99, 'This is product 3');
let product8 = new Product('Product 3', 'https://asandam.github.io/images/combo1.jpg', 39.99, 'This is product 3');

let products = [product1, product2, product3, product4, product5, product6, product7, product8];

let productRow = document.querySelector('#product-row');

// Function to add a product to the page
function addProductToPage(product) {

    productRow.innerHTML += `
        <div class="col">
            <div class="card h-100">
                <img src="${product.image}" class="card-img-top img-fluid" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="price">R${product.price}</p>
                    <button class="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    `;
}

// Loop through the products array and add each product to the page
for (let i = 0; i < products.length; i++) {
    addProductToPage(products[i]);
}

let image = document.querySelector('img')

image.style.width('250')
image.style.height('10')