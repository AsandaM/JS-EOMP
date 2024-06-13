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

let tableBody = document.querySelector('#productTable tbody');

products.forEach((product, index) => {
  tableBody.innerHTML += `
    <tr>
      <td>${product.name}</td>
      <td><img src="${product.image}" class="img-fluid" style="width: 100px; height:100px;"></td>
      <td>${product.category}</td>
      <td>${product.price}</td>
      <td>
        <button class="btn btn-primary">Edit</button>
        <button class="btn btn-danger">Delete</button>
      </td>
    </tr>
  `;
});


// Function to render the table
function renderTable() {
  // Clear the table body
  tableBody.innerHTML = '';

  // Add rows for each product
  products.forEach((product, index) => {
    tableBody.innerHTML += `
      <tr>
        <td>${product.name}</td>
        <td><img src="${product.image}" class="img-fluid" style="width: 100px; height:100px;"></td>
        <td>${product.category}</td>
        <td>R${product.price}</td>
        <td>
          <button class="btn btn-primary">Edit</button>
          <button class="btn btn-danger">Delete</button>
        </td>
      </tr>
    `;
  });
}

// Call renderTable to initially render the table
renderTable();

// Get the modal and form elements
let modal = document.getElementById('editModal');
let form = document.getElementById('editForm');

// Add event listener to the table body
tableBody.addEventListener('click', function(event) {
  let rowIndex = event.target.parentElement.parentElement.rowIndex; // Get the row index
  let product = products[rowIndex - 1];

  // Check if the product is defined
  if (product) {
    // Check if the clicked element is an "Edit" button
    if (event.target.classList.contains('btn-primary')) {
      // Edit button was clicked

      // Open the modal and populate the form with the product data
      form.name.value = product.name;
      form.image.value = product.image;
      form.category.value = product.category;
      form.price.value = product.price;
      modal.style.display = 'block';

    } else if (event.target.classList.contains('btn-danger')) {
      // Delete button was clicked
      // Remove the product from the array
      products.splice(rowIndex - 1, 1);

      // Re-render the table
      renderTable();
      window.alert('Product deleted');
    }
    localStorage.setItem('products', JSON.stringify(products));
  }

  // Add event listener to the form
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the form data
    let name = form.name.value;
    let image = form.image.value;
    let category = form.category.value;
    let price = form.price.value;

    // Update the product data
    product.name = name;
    product.image = image;
    product.category = category;
    product.price = price;

    // Save the updated product list back to LocalStorage
    localStorage.setItem('products', JSON.stringify(products));

    // Re-render the table
    renderTable();

    // Close the modal
    modal.style.display = 'none';

    // Display a popup message
  window.alert('Product edited');
  });
});

// Get the add product form and the save changes button
let addProductForm = document.getElementById('addProductForm');
let saveChangesButton = document.querySelector('.modal-footer .btn-primary');

// Add event listener to the save changes button
saveChangesButton.addEventListener('click', function(event) {

  if (!window.confirm('Are you sure you want to add this product?')) {
    event.preventDefault();
  }
  // Get the form data
  let name = document.getElementById('productName').value;
  let category = document.getElementById('productCategory').value;
  let price = document.getElementById('productPrice').value;
  let image = document.getElementById('productImage').value;

  // Create a new product
  let newProduct = {
    name: name,
    category: category,
    price: price,
    image: image
  };

  // Add the new product to the products array
  products.push(newProduct);
  console.log(products);

  // Re-render the table
  renderTable();
  
  localStorage.setItem('products', JSON.stringify(products));

  
});

