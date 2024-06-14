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
  

let purchasedItems = JSON.parse(localStorage.getItem('purchasedItems')) 

let cart = document.querySelector('#cart')

function displayData(purchasedItems){

    if (purchasedItems.length === 0) {
        cart.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }
    let table = `
        <table class="table" style="border: none">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
    `;

    purchasedItems.forEach((item, index) =>{
        table += `
            <tr>
                <td><img src="${item.image}" style="width: 5%; height:5%;"> ${item.name}</td>
                <td>
                    <button class="decrease" data-index="${index}">-</button>
                    ${item.quantity}
                    <button class="increase" data-index="${index}">+</button>
                </td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
            </tr>
        `;
    });

    table += `</tbody></table>`;

    cart.innerHTML = table;

    increase()
    decrease()

}


localStorage.setItem('purchasedItems', JSON.stringify(purchasedItems));


displayData(purchasedItems)

function updateTotalQuantity() {
    document.querySelector('.position-absolute').innerText = purchasedItems.reduce((total, current) => {
        return current.quantity + total;
    }, 0);
}

// Initialize the total quantity display on page load
updateTotalQuantity();

function checkOutTotalQuantity() {
    document.querySelector('#totalQ').innerText = purchasedItems.reduce((total, current) => {
        return current.quantity + total;
    }, 0);
}

checkOutTotalQuantity()

function subTotal() {
    const total = purchasedItems.reduce((total, current) => {
        return (current.price * current.quantity) + total;
    }, 0);
    document.querySelector('#subTotal').innerText = 'R' + total.toFixed(2);
}

// Call the function to initialize the subtotal on page load
subTotal();

let submitButton = document.querySelector('#submitBtn')

function submitbtn() {
    purchasedItems = []
}

submitButton.addEventListener('click', ()=>{

    let cardName = document.getElementById('cardName').value
    if (!cardName) {
        alert('Can you atleast fill in the name on card field')
    } else {
    
        submitbtn()
        checkOutTotalQuantity()
        subTotal()
        updateTotalQuantity();
        displayData(purchasedItems)
        localStorage.setItem('purchasedItems', JSON.stringify(purchasedItems));
    }
})

function increase() {
    // Add event listeners for the increase and decrease buttons
    document.querySelectorAll('.increase').forEach(button => {
        button.addEventListener('click', function() {
            let index = this.getAttribute('data-index');
            purchasedItems[index].quantity++;
            displayData(purchasedItems)
            localStorage.setItem('purchasedItems', JSON.stringify(purchasedItems));
        });
    });
}

function decrease() {
    document.querySelectorAll('.decrease').forEach(button => {
        button.addEventListener('click', function() {
            let index = this.getAttribute('data-index');
            if (purchasedItems[index].quantity > 1) {
                purchasedItems[index].quantity--;
                displayData(purchasedItems)
                localStorage.setItem('purchasedItems', JSON.stringify(purchasedItems));
            }
        });
    });
}
