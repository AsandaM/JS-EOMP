//spinner
window.addEventListener('load', function() {
    // Hide the spinner after all images have loaded
    document.getElementById('spinner').style.display = 'none';
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    // Show the spinner as soon as the DOM is ready (before images have finished loading)
    document.getElementById('spinner').style.display = 'block';
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    let year = new Date().getFullYear();
    document.getElementById('footer').innerHTML = 'Copyright &copy; ' + year + ' Jewellery Store by Asanda Mehlo';
  });
  


let products =JSON.parse(localStorage.getItem('products'))|| [product1, product2, product3, product4, product5, product6, product7, product8, product9, product10, product11, product12];

localStorage.setItem('products', JSON.stringify(products))

let items = JSON.parse(localStorage.getItem('purchasedItems'))
// console.log(items);

let productRow = document.querySelector('#product-row');

// Function to add a product to the page
function addProductToPage(products) {
    products.forEach((product,index)=>{

        productRow.innerHTML += `
            <div class="col">
                <div class="card style="width: 18rem;">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}" style="height: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="price">R${product.price}</p>
                        <button id="btnCart" class="btn btn-link add-to-cart data-product-id="${index}" value="${product.id}">Add to Cart</button>
                        <button data-bs-toggle="modal" data-bs-target="#productModal-${index}" class="btn btn-link">View More</button>
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
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Continue Shopping</button>
                            <button id="btnCart" type="button" class="btn btn-secondary add-to-cart" data-bs-dismiss="modal" value="${product.id}">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        

    })
    // purchase()
}

// Loop through the products array and add each product to the page
addProductToPage(products)

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

// Function to sort products by name in ascending order
function sortByNameAsc() {
    products.sort(function(a, b) {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    });
}

// Function to sort products by name in descending order
function sortByNameDesc() {
    products.sort(function(a, b) {
        if (a.name > b.name) {
            return -1;
        }
        if (a.name < b.name) {
            return 1;
        }
        return 0;
    });
}


let currentFilter = '';

// Event listener for the sort select element by price
let sortItems = document.getElementById('sort')

sortItems.addEventListener('change', function() {
    let value = this.value;
    if (value === 'asc') {
        sortProductsAsc();
    } else if (value === 'desc') {
        sortProductsDesc();
    } else if (value === 'ascending') {
        sortByNameAsc();
    } else if (value === 'descending'){
        sortByNameDesc();
    }
    // Clear the current displayed products
    productRow.innerHTML = '';
    // Apply the current filter to the sorted products
    let displayedProducts = currentFilter ? products.filter(product => product.category === currentFilter) : products;
    // Add the sorted and filtered products to the page
    addProductToPage(displayedProducts);
    purchase()
});



// Event listener for the filter select element
let filterItems = document.getElementById('filter')
filterItems.addEventListener('change', function() {
    let value = this.value;
    currentFilter = value; // Store the current filter
    // Clear the current displayed products
    productRow.innerHTML = '';
    if (value === '') {
        // If the selected value is an empty string, display all products
            addProductToPage(products)
    } else {
        // Filter the products array
        let filteredProducts = products.filter(function(product) {
            return product.category === value;
        });
        console.log(filteredProducts);
        // Loop through the filtered products array and add each product to the page
        addProductToPage(filteredProducts)
        purchase()
        
    }
});

let currentColor = '';

// Event listener for the color select element
let colorItems = document.getElementById('color')

colorItems.addEventListener('change', function() {
    let value = this.value;
    currentColor = value; // Store the current color
    // Filter the products array
    let filteredProducts = products.filter(function(product) {
        return product.colour === value;
    });
    // Clear the current displayed products
    productRow.innerHTML = '';
    if (value === '') {
        // If the selected value is an empty string, display all products
        addProductToPage(products);
    } else {
        // Add the filtered products to the page
        addProductToPage(filteredProducts);
    }
    purchase()
});



//display search
let navLink = document.querySelector('.nav-link');

navLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action (navigating to ./product.html)
    let searchInput = document.getElementById('search-input');
    if (searchInput.style.display === 'none') {
        searchInput.style.display = 'block';
    } else {
        searchInput.style.display = 'none';
    }
});
let searchInput = document.getElementById('search-input');

searchInput.addEventListener('input', function(event) {
    try {
        let searchTerm = event.target.value.toLowerCase();
        let filteredProducts = products.filter(product => {
            return (product.name && product.name.toLowerCase().includes(searchTerm))
                || (product.category && product.category.toLowerCase().includes(searchTerm))
                || (product.colour && product.colour.toLowerCase().includes(searchTerm));
        });

        // Clear the current displayed products
        productRow.innerHTML = '';

        // Add the filtered products to the page
        addProductToPage(filteredProducts);
    } catch (error) {
        console.log('An error occurred while filtering products: ', error);
    }
    purchase()
});

// add to cart

let btns = document.querySelectorAll('#btnCart');
let purchasedItems = items || [];

function purchase(){

    btns.forEach(button =>{
        button.addEventListener('click', ()=>{
            try {
                let x = products.find(item => item.id == button.value)
                let purchasedItem = purchasedItems.find(pItem => pItem.id === x.id)

                if (purchasedItem) {
                    purchasedItem.price = purchasedItem.price * purchasedItem.quantity
                    purchasedItem.quantity += 1
                } else {

                    purchasedItems.push(x)
                }
                alert('Product added to cart')
                // Update the purchasedItems in the localStorage
                localStorage.setItem('purchasedItems', JSON.stringify(purchasedItems));
            } catch (error) {
                console.error('An error occurred while purchasing a product:', error);
            }
        })
    })
 }

purchase()

function updateTotalQuantity() {
    document.querySelector('.position-absolute').innerText = purchasedItems.reduce((total, current) => {
        return current.quantity + total;
    }, 0);
}

// Initialize the total quantity display on page load
updateTotalQuantity();