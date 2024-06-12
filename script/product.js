// Product constructor function
function Product(name, image, price, description, category) {
    this.name = name;
    this.image = image;
    this.price = price;
    this.description = description;
    this.category = category;
}

// Create new products
let product1 = new Product('Gold Bead Butterfly Bracelet', 'https://asandam.github.io/images/bracelet.jpg', 119.99, 'Pair this gold bead and butterfly motif bracelet with a fine chain for an on-tren look.', 'bracelet');
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
function addProductToPage(product, index) {
    let productElement = document.createElement('div');
    productElement.innerHTML = `
        <div class="col">
            <div class="card h-100">
                <img src="${product.image}" class="card-img-top img-fluid" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="price">R${product.price}</p>
                    <button class="btn btn-primary">Add to Cart</button>
                    <button data-bs-toggle="modal" data-bs-target="#productModal-${index}" class="btn btn-primary">View More</button>
                </div>
            </div>
        </div>

        <div class="modal fade" id="productModal-${index}" tabindex="-1" aria-labelledby="productModalLabel-${index}" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="productModalLabel-${index}">${product.name}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <img src="${product.image}" class="img-fluid" alt="${product.name}">
                        <p>${product.description}</p>
                        <p class="price">R${product.price}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    productRow.appendChild(productElement);
}

// Loop through the products array and add each product to the page
products.forEach((product, index) => {
    addProductToPage(product, index);
});

// Function to sort products by price in ascending order
function sortProductsAsc() {
    products.sort(function(a, b) {
        return a.price - b.price;
    });
}

// Function to sort products by price in descending order
function sortProductsDesc() {
    products.sort(function(a, b) {
        return b.price - a.price;
    });
}

// Event listener for the sort select element
document.getElementById('sort').addEventListener('change', function() {
    let value = this.value;
    if (value === 'asc') {
        sortProductsAsc();
    } else if (value === 'desc') {
        sortProductsDesc();
    }
    // Clear the current displayed products
    productRow.innerHTML = '';
    // Loop through the sorted products array and add each product to the page
    products.forEach((product, index) => {
        addProductToPage(product, index);
    });
});

// Event listener for the filter select element
document.getElementById('filter').addEventListener('change', function() {
    let value = this.value;
    // Filter the products array
    let filteredProducts = products.filter(function(product) {
        return product.category === value;
    });
    // Clear the current displayed products
    productRow.innerHTML = '';
    // Loop through the filtered products array and add each product to the page
    filteredProducts.forEach((product, index) => {
        addProductToPage(product, index);
    });
});