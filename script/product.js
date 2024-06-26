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
  
// Product constructor function
function Product(id, name, image, price, description, category, colour) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.price = price;
    this.description = description;
    this.category = category;
    this.colour = colour;
    this.quantity = 1;
}
  
// Create new products
let product1 = new Product(1,'Gold Heart Shaped Earrings', 'https://asandam.github.io/images/pexels.jpg', 689.99, 'Pair this gold bead and butterfly motif bracelet with a fine chain for an on-tren look.', 'earring','gold');
let product2 = new Product(2,'Gold Plated Necklace', 'https://asandam.github.io/images/necklace4.png', 789.99, 'Sparkle and shine with our classic gold-plated sterling silver cubic zirconia jewellery', 'necklace', 'gold');
let product3 = new Product(3,'Gold Linked Heart Bracelet', 'https://asandam.github.io/images/rosegold.png', 399.99, ' Add this heart linked bracelet to your collection for the ultimate signature look.', 'bracelet', 'gold');
let product4 = new Product(4,'Gold Classic Twisted Hoop Earings', 'https://asandam.github.io/images/jewellery/ecrin.jpg', 389.99, 'These Gold Classic Twisted Hoop Earrings are crafted from 100% stainless steel, making them highly resistant and durable for everyday wear.', 'earring', 'gold');
let product5 = new Product(5,'Gold Bead & Pearl Choker Pack', 'https://asandam.github.io/images/jewellery/erik.jpg', 499.99, 'This beaded necklace evokes major luxury holiday vibes! It features multicoloured pastel beads, gold-toned elements and faux pearls. Playful yet sophisticated, wear this from day to night.', 'necklace', 'gold');
let product6 = new Product(6,'Blue Coated Petal Drop Earrings', 'https://asandam.github.io/images/jewellery/ashuphotography.jpg', 599.99, 'These earrings feature a gorgeous, blue coated petal design - perfect for a night out or your next event.', 'earring', 'blue');
let product7 = new Product(7, 'Gold Textured Bangle', 'https://asandam.github.io/images/jewellery/mlkbnl-12.jpg', 999.99, 'Jingle, jangle I like your bangle! This cute pack includes six gold-toned bangles with a textured finish that will shine when they hit the light','bracelet', 'gold');
let product8 = new Product(8, 'Gold Cubic Zirconia Solitaire Ring', 'https://asandam.github.io/images/jewellery/the-glorious.jpg', 1899.99, 'Make an elegant statement with a stunning ring! This lovely ring is gold plated and it features a charming cubic zirconia design. If you like it, then you should shine with it.', 'ring', 'gold');
let product9 = new Product(9, 'Silver-colored Bangle', 'https://asandam.github.io/images/jewellery/jacob.jpg', 359.99, 'Style this bangle multi-pack with matching gold accessories for an on-trend look.', 'bracelet', 'silver');
let product10 = new Product(10, 'Rose Silver Triple Stone Ring', 'https://asandam.github.io/images/jewellery/glorious.jpg', 3999.99, 'This cocktail-inspired ring features a rose gold setting and triple stone design for a unique finish.', 'ring', 'rose');
let product11 = new Product(11, 'Green Round Beaded Ring', 'https://asandam.github.io/images/jewellery/prado.jpg', 1299.99, 'If you like it, put a ring on it! Expand your jewellery collection with our range of trending and timeless rings.', 'ring', 'green');
let product12 = new Product(12, 'Gold Plated Fine Chain Necklace', 'https://asandam.github.io/images/jewellery/jill.jpg', 799.99, 'This Gold Plated Stainless Steel Fine Chain Layered Necklace is crafted from 100% stainless steel, making it highly resistant and durable for everyday wear.', 'necklace', 'gold');
  

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